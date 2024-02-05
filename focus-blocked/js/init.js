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
const focus_mode = urlParams.get('focus_mode');
const block_type = urlParams.get('block_type');
const cuddlyBearMode = urlParams.get('cuddly_bear_mode');
const blocked_reason = urlParams.get('reason');

const focus_mode_end_time = moment(urlParams.get('focus_mode_end_time'));

const { focus_tip, focus_tip_old_url } = getFocusTip();
const blocked_message = getBlockedMessage(block_type);
const isPageLoaded = Boolean(Storage.getItem(LOCAL_STORAGE.IS_PAGE_LOADED));
const isPageReloaded = Boolean(Storage.getItem(LOCAL_STORAGE.IS_PAGE_RELOADED));
const isExternalHintRequired = Object.values(EXTERNAL_HINT_DOMAINS).includes(
  current_url
);
let toast = document.getElementById('toast');
let cuddlyBearBtn = document.getElementById('cuddlyBearBtn');
let privacyBtn = document.getElementById('privacyBtn');
let unblockBtn = document.getElementById('unblockBtn');
