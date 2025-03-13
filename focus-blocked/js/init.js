/************** sentry **********************/
Sentry.init({
  dns: 'https://10feadec83b909ed85197bab5ac9c0b0@sentry.focusbear.io/4',
  tracesSampleRate: 0.2,
  debug: true,
});

/************** sentry **********************/

/************** var **********************/

const urlParams = new URLSearchParams(window.location.search);
let toast = document.getElementById('toast');
let privacyBtn = document.getElementById('privacyBtn');
let unblockBtn = document.getElementById('popupUnblockBtn');
let goalsContainer = document.getElementById('goals');
let focusRemainingSeconds = 0;
let focusTitle = document.getElementById('focusTitle');
let focusSubtitle = document.getElementById('focusSubTitle');
let focusAdditionalInfo = document.getElementById('focusAdditionalInfo');
let focusProgressWrapper = document.getElementById('progressWrapper');
let focusBlockedOriginalUrl = document.getElementById('originalUrl');
let longTermGoalsTitle = document.getElementById('longTermGoalsTitle');
let longTermGoalsContainer = document.getElementById('longTermGoalsContainer');
let focusTipWrapper = document.getElementById('focusTipWrapper');
let focusTitleWrapper = document.getElementById('focusTitleWrapper');
let mainContainer = document.getElementById('container');
const lang = urlParams?.get('lang') === LANGUAGE.ES ? LANGUAGE.ES : LANGUAGE.EN;
const selected_lang = locale[lang];
let isExternalHintRequired = false;
let old_url = '';
let domain = '';

let current_url = urlParams.get('old_url') || '';

if (typeof isValidUrl !== 'undefined') {
  current_url = current_url?.startsWith('http')
    ? current_url
    : `https://${current_url}`;

  if (isValidUrl(current_url)) {
    old_url = current_url?.substring(
      0,
      current_url.indexOf('?') === -1
        ? current_url.length
        : current_url.indexOf('?')
    );

    domain = new URL(decodeURIComponent(old_url)).hostname;
    isExternalHintRequired = Object.values(EXTERNAL_HINT_DOMAINS).includes(
      domain
    );
  } else {
    Sentry.captureMessage('Invalid value for old_url query param', {
      level: 'error',
      extra: { old_url: current_url },
    });
  }
}

const focus_mode = urlParams.get('focus_mode') ?? null;
const block_type = urlParams.get('block_type') ?? null;
const cuddly_bear_mode = urlParams.get('cuddly_bear_mode') === 'true';
const blocked_reason = urlParams.get('reason');
const strict_blocking = urlParams.get('strict_blocking') === 'true';
const font = urlParams.get('font');
const isonboarding = urlParams.get('isonboarding') === 'true';

let encouraging_info = {};
try {
  encouraging_info = JSON.parse(urlParams.get('encouraging_info'));
} catch (e) {
  console.warn('invalid encouraging_info');
}
const longTermGoals = encouraging_info?.long_term_goals ?? [];
const focusedTime = encouraging_info?.focused_time ?? 0;
const focusBlocksCompleted = urlParams.get('focusBlocksCompleted');
const totalFocusBlocksCompleted = urlParams.get('totalFocusBlocksCompleted');

const focus_mode_end_time = moment(urlParams.get('focus_mode_end_time'));
const focus_blocked_message = getFocusTitle(block_type);
const isPageLoaded = Boolean(
  localStorage.getItem(LOCAL_STORAGE.IS_PAGE_LOADED)
);
const isPageReloaded = Boolean(
  localStorage.getItem(LOCAL_STORAGE.IS_PAGE_RELOADED)
);
const version = urlParams.get('version');
const show_tour = urlParams.get('show_tour') === 'true';
const confirmSuperDistracting =
  urlParams.get('confirm_super_distracting') === 'true';
const confirmAIDistractingURL =
  urlParams.get('confirm_ai_distracting_url') === 'true';
const focusModeIntention = urlParams.get('focus_mode_intention') ?? '';
const shouldActivateSuperDistractionBlock = [
  FOCUS_BLOCK_OPTION.FOCUS_BLOCK_ALWAYS_OLD,
  FOCUS_BLOCK_OPTION.FOCUS_BLOCK_ALWAYS,
].includes(block_type);
const isMorningOrEveningBlock = [
  FOCUS_BLOCK_OPTION.MORNING,
  FOCUS_BLOCK_OPTION.MORNING_HABIT,
  FOCUS_BLOCK_OPTION.EVENING,
  FOCUS_BLOCK_OPTION.EVENING_HABIT,
].includes(block_type);
/************** var **********************/

/************** font **********************/
const devicePlatform =
  window.navigator.userAgent.indexOf('Win') > -1 ? 'win' : 'mac';
const defaultFont =
  devicePlatform === 'win' ? FONT.SEGEO_UI : FONT.SAN_FRANCISCO;
document.body.style.fontFamily = font ?? defaultFont;
/************** font **********************/
