let confirmationModalTitle = document.getElementById(
  'confirmation-modal-title'
);
let confirmationModalSubTitle = document.getElementById(
  'confirmation-modal-sub-title'
);
let confirmationModalAchievementLabel = document.getElementById(
  'confirmation-modal-achievement-label'
);
let confirmationModalTimeLabel = document.getElementById(
  'confirmation-modal-input-time-label'
);
let confirmationModalTimeUnitLabel = document.getElementById(
  'confirmation-modal-input-time-unit-label'
);
let confirmationModalTimeInput = document.getElementById(
  'confirmation-modal-time-input'
);
let confirmationModalInput = document.getElementById(
  'confirmation-modal-time-input'
);
let confirmationModalUnlockBtn = document.getElementById(
  'confirmation-modal-unlock-btn'
);
let confirmationDistractionActions = document.getElementById(
  'confirmation-distracting-actions'
);
let confirmationModalAchievementInput =
  document.getElementById('input-achievement');
let tempAllowAccessBtn = document.getElementById('temp-allow-access-btn');
let blockAccessBtn = document.getElementById('block-access-btn');
let unlockDurationMinutes = 2;
let distractionIntention = '';

if (
  shouldActivateSuperDistractionBlock &&
  (confirmSuperDistracting || confirmAIDistractingURL)
) {
  confirmationDistractionActions.className =
    'confirmation-super-distracting-actions-wrapper';

  tempAllowAccessBtn.innerText = selected_lang.temporarily_allow_access;
  blockAccessBtn.innerText = selected_lang.block_access_i_dont_need_it;
  confirmationModalTitle.innerHTML =
    selected_lang.temporarily_allow_access_to_url(old_url);
  confirmationModalAchievementLabel.innerText =
    selected_lang.what_do_you_plan_to_achieve_here;
  confirmationModalTimeLabel.innerText =
    selected_lang.how_much_time_do_you_need;
  confirmationModalTimeUnitLabel.innerText = selected_lang.minutes;
  confirmationModalUnlockBtn.innerText =
    selected_lang.unlock_for_minutes_minutes(unlockDurationMinutes);

  if (confirmAIDistractingURL) {
    confirmationModalSubTitle.innerHTML =
      selected_lang.your_focus_intention_is_intention_and_domain_doesnt_seem_relevant(
        focusModeIntention ? focusModeIntention : focus_mode,
        domain
      );
  }
} else {
  confirmationDistractionActions.className = 'hide';
}

confirmationModalTimeInput.addEventListener('input', (event) => {
  const minute = parseInt(event.target.value, 10);
  const isMinuteValid = !isNaN(minute) && Boolean(minute);
  confirmationModalUnlockBtn.disabled = !isMinuteValid;
  if (!isMinuteValid) {
    event.target.value = '';
  }
  unlockDurationMinutes = minute;
  confirmationModalUnlockBtn.innerText =
    selected_lang.unlock_for_minutes_minutes(event.target.value);
});

confirmationModalAchievementInput.addEventListener('input', (event) => {
  const value = event.target.value;
  distractionIntention = value;
});

confirmationModalUnlockBtn.addEventListener('click', () => {
  const current_href = window.location.href;
  window.open(
    `${current_href}&unlock_duration_minutes=${unlockDurationMinutes}&distraction_intention=${encodeURIComponent(
      distractionIntention
    )}`,
    '_self'
  );
});

blockAccessBtn.addEventListener('click', () => {
  confirmSuperDistracting && removeQueryParam('confirm_super_distracting');
  confirmAIDistractingURL && removeQueryParam('confirm_ai_distracting_url');
  confirmationDistractionActions.className = 'hide';
});

function openDistractionConfirmationModal() {
  document.getElementById(
    'super-distracting-confirmation-modal'
  ).style.display = 'flex';
}

function closeDistractionConfirmationModal() {
  document.getElementById(
    'super-distracting-confirmation-modal'
  ).style.display = 'none';
}

function removeQueryParam(param) {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  params.delete(param);
  window.history.replaceState({}, '', `${url.pathname}?${params.toString()}`);
}
