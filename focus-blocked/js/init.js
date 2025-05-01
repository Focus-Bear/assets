/************** sentry **********************/
window.sentryOnLoad = function () {
  Sentry?.init({
    tracesSampleRate: 0.2,
  });
};
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

if (current_url && typeof isValidUrl !== 'undefined') {
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
    logSentryError({ old_url: current_url });
  }
}

const focus_mode = urlParams.get('focus_mode') ?? null;
const block_type = urlParams.get('block_type') ?? null;
const blocked_reason = urlParams.get('reason');
const strict_blocking = urlParams.get('strict_blocking') === 'true';
const font = urlParams.get('font');
const isonboarding = urlParams.get('isonboarding') === 'true';

let encouraging_info = {};
try {
  encouraging_info = JSON.parse(urlParams.get('encouraging_info'));
} catch (error) {
  logSentryError(error, 'invalid encouraging_info', 'warning');
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
const flags = urlParams.get('flags') ?? [];
const focusBlockMode =
  urlParams.get('block_mode') === FOCUS_BLOCK_MODE.CUDDLY
    ? FOCUS_BLOCK_MODE.CUDDLY
    : FOCUS_BLOCK_MODE.GRIZZLY;

const initialQuestionYesBtn = document.getElementById('yes-btn');
const initialQuestionNoBtn = document.getElementById('no-btn');
const yesLowRelevanceBtn = document.getElementById('yes-low-relevance-btn');
const noLowRelevanceBtn = document.getElementById('no-low-relevance-btn');
const convinceSubmitBtn = document.getElementById('convince-submit-btn');
const cancelConvinceBtn = document.getElementById('cancel-convince-btn');
const yesAiResponseBtn = document.getElementById('yes-ai-response-btn');
const noAiResponseBtn = document.getElementById('no-ai-response-btn');
const setIntentionBtn = document.getElementById('set-intention-btn');
const cancelTimeLimitBtn = document.getElementById('cancel-time-limit-btn');
const convinceReason = document.getElementById('convince-reason');
const timeOptions = document.querySelectorAll('.time-option');

const initialQuestionState = document.getElementById('initial-question-state');
const lowRelevanceState = document.getElementById('low-relevance-state');
const convinceAiState = document.getElementById('convince-ai-state');
const aiResponseState = document.getElementById('ai-response-state');
const setTimeLimitState = document.getElementById('set-time-limit-state');

const initialQuestionButtons = document.getElementById(
  'initial-question-buttons'
);
const lowRelevanceButtons = document.getElementById('low-relevance-buttons');
const convinceAiButtons = document.getElementById('convince-ai-buttons');
const aiResponseButtons = document.getElementById('ai-response-buttons');
const setTimeLimitButtons = document.getElementById('set-time-limit-buttons');

const timerInitialQuestion = document.getElementById('timer-initial-question');
const timerLowRelevance = document.getElementById('timer-low-relevance');
const timerConvinceAi = document.getElementById('timer-convince-ai');
const timerAiResponse = document.getElementById('timer-ai-response');
const timerSetTimeLimit = document.getElementById('timer-set-time-limit');
/************** var **********************/

/************** font **********************/
const devicePlatform =
  window.navigator.userAgent.indexOf('Win') > -1 ? 'win' : 'mac';
const defaultFont =
  devicePlatform === 'win' ? FONT.SEGEO_UI : FONT.SAN_FRANCISCO;
document.body.style.fontFamily = font ?? defaultFont;
/************** font **********************/
