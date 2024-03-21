const urlParams = new URLSearchParams(window.location.search);
let current_url = urlParams.get('old_url');
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
const encouraging_info = JSON.parse(urlParams.get('encouraging_info'));
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
let toast = document.getElementById('toast');
let cuddlyBearBtn = document.getElementById('cuddlyBearBtn');
let privacyBtn = document.getElementById('privacyBtn');
let unblockBtn = document.getElementById('unblockBtn');
let goalsContainer = document.getElementById('goals');
let focusRemainingSeconds = 0;
let focusTitle = document.getElementById('focusTitle');
let focusSubtitle = document.getElementById('focusSubTitle');
let focusAdditionalInfo = document.getElementById('focusAdditionalInfo');
let focusProgressWrapper = document.getElementById('progressWrapper');
let focusBlockedUrl = document.getElementById('originalUrl');
