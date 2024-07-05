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
let cuddlyBearBtn = document.getElementById('cuddlyBearBtn');
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

/************** var **********************/

let current_url = urlParams.get('old_url');
if (!current_url) throw Error(`query param old_url:${current_url}`);
current_url = current_url?.startsWith('http')
  ? current_url
  : `https://${current_url}`;
const old_url = current_url.substring(
  0,
  current_url.indexOf('?') === -1
    ? current_url.length
    : current_url.indexOf('?')
);
const domain = new URL(old_url).hostname;
const focus_mode = urlParams.get('focus_mode');
const block_type = urlParams.get('block_type');
const cuddlyBearMode = urlParams.get('cuddly_bear_mode');
const blocked_reason = urlParams.get('reason');
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
const isPageLoaded = Boolean(Storage.getItem(LOCAL_STORAGE.IS_PAGE_LOADED));
const isPageReloaded = Boolean(Storage.getItem(LOCAL_STORAGE.IS_PAGE_RELOADED));
const isExternalHintRequired = Object.values(EXTERNAL_HINT_DOMAINS).includes(
  domain
);

//@Description: it supports for older versions of the app
if (!unblockBtn) {
  unblockBtn = document.getElementById('unblockBtn');
}

document.getElementById('privacyNoticeContent').innerHTML =
  selected_lang.privacy_notice;
privacyBtn.textContent = selected_lang.privacy_button;
cuddlyBearBtn.textContent = selected_lang.oops_i_actually_need_this;
if (longTermGoalsTitle) {
  longTermGoalsTitle.textContent =
    selected_lang.every_focus_session_you_complete_is_taking_you_towards_long_term_goals;
}
unblockBtn.textContent = selected_lang.yes_i_actually_need_it;
document.getElementById('popupClose').textContent =
  selected_lang.you_re_right_get_this_site_away_from_me;
