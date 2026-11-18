const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');

function render(params) {
  const dom = new JSDOM(fs.readFileSync(path.join(root, 'index.html'), 'utf8'), {
    url: `http://127.0.0.1:8766/focus-block.html?${new URLSearchParams(params)}`,
    runScripts: 'outside-only',
  });
  if (params.block_type !== 'managed-safety') dom.window.localStorage.setItem('is_intro_showed', 'DONE');
  // Deliberately load the shipped scripts, without any external network resources.
  for (const script of ['moment_2.29.1.min.js', 'utils.js', 'locale.js', 'constant.js',
    'messages.js', 'init.js', 'main.js', 'intro.js', 'confirmation.modal.js', 'focus_verify_modal.js']) {
    vm.runInContext(fs.readFileSync(path.join(root, 'js', script), 'utf8'), dom.getInternalVMContext(), { filename: script });
  }
  return dom;
}

for (const lang of ['en', 'es']) {
  for (const old_url of ['https://www.roblox.com/games', 'https://www.roblox.com/100%25?x=%26',
    'https://www.roblox.com/100%?block_type=focus', 'https://www.roblox.com/<img src=x onerror=alert(1)>']) {
    test(`managed ${lang} page survives URL ${old_url} and refuses personal-unlock flags`, () => {
      const dom = render({ block_type: 'managed-safety', old_url, lang,
        block_mode: 'cuddly', strict_blocking: 'false', isonboarding: 'true', show_tour: 'true',
        confirm_super_distracting: 'true', confirm_ai_distracting_url: 'true',
        'ai-focus-block-verification-enabled': 'true', 'ai-focus-block-enabled': 'true' });
      try {
        const doc = dom.window.document;
        assert.match(doc.getElementById('focusTitle').textContent, lang === 'en' ? /safety settings/ : /seguridad/);
        assert.equal(doc.getElementById('focusSubTitle').textContent, 'www.roblox.com');
        for (const id of ['originalUrl', 'cuddlyBearBtn', 'progressWrapper', 'confirmation-modal', 'focus-verify-modal']) {
          assert.equal(doc.getElementById(id).style.display, 'none', id);
        }
        assert.equal(doc.getElementById('originalUrl').getAttribute('href'), null);
        let opened = false;
        dom.window.open = () => { opened = true; };
        doc.getElementById('popupUnblockBtn').click();
        assert.equal(opened, false);
        assert.equal(doc.getElementById('focusTitle').querySelector('img'), null);
        assert.equal(dom.window.localStorage.length, 0);
      } finally { dom.window.close(); }
    });
  }
}

test('ordinary blocked pages retain their existing personal-unlock action', () => {
  const dom = render({ block_type: 'always', old_url: 'https://example.com/100%25', block_mode: 'cuddly' });
  try {
    const doc = dom.window.document;
    assert.notEqual(doc.getElementById('cuddlyBearBtn').style.display, 'none');
    let opened;
    dom.window.open = (url) => { opened = url; };
    doc.getElementById('popupUnblockBtn').click();
    assert.equal(opened, 'https://example.com/100%25?focus_bear_temporarily_allow=true');
    assert.equal(doc.getElementById('originalUrl').getAttribute('href'), 'https://example.com/100%25');
  } finally { dom.window.close(); }
});

// Who set the block decides who the student is told to ask.
const whoToAsk = [
  { managed_by: 'school', en: [/Your school blocks/, /ask your teacher/], es: [/Tu escuela bloquea/, /profesor/] },
  { managed_by: 'parent', en: [/parent or guardian blocks/, /ask them/], es: [/padre, madre o tutor bloquea/, /pregúntale/] },
  // No hint, or a value the page doesn't know: name both, never guess one.
  { managed_by: undefined, en: [/safety settings block/, /teacher during school time, or your parent or guardian/],
    es: [/configuración de seguridad/, /profesor o profesora en horario escolar, o a tu padre, madre o tutor/] },
  { managed_by: '<script>alert(1)</script>', en: [/safety settings block/, /teacher during school time/],
    es: [/configuración de seguridad/, /horario escolar/] },
];
for (const lang of ['en', 'es']) {
  for (const { managed_by, ...expected } of whoToAsk) {
    test(`managed ${lang} page names who to ask when managed_by=${managed_by}`, () => {
      const params = { block_type: 'managed-safety', old_url: 'https://www.roblox.com/games', lang };
      if (managed_by !== undefined) params.managed_by = managed_by;
      const dom = render(params);
      try {
        const doc = dom.window.document;
        const [title, body] = expected[lang];
        assert.match(doc.getElementById('focusTitle').textContent, title);
        assert.match(doc.getElementById('focusAdditionalInfo').textContent, body);
        assert.equal(doc.getElementById('focusTitle').querySelector('script'), null);
      } finally { dom.window.close(); }
    });
  }
}
