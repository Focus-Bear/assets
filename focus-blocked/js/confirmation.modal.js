let confirmationModalTitle = document.getElementById(
  'confirmation-modal-title'
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
let confirmationModalUnlockBtn = document.getElementById(
  'confirmation-modal-unlock-btn'
);

function openConfirmationModal() {
  document.getElementById(
    'super-distracting-confirmation-modal'
  ).style.display = 'flex';
}

function closeConfirmationModal() {
  document.getElementById(
    'super-distracting-confirmation-modal'
  ).style.display = 'none';
}

confirmationModalTitle.innerText =
  selected_lang.temporarily_allow_access_to_url(old_url);
confirmationModalAchievementLabel.innerText =
  selected_lang.what_do_you_plan_to_achieve_here;
confirmationModalTimeLabel.innerText = selected_lang.how_much_time_do_you_need;
confirmationModalTimeUnitLabel.innerText = selected_lang.minutes;
confirmationModalUnlockBtn.innerText =
  selected_lang.unlock_for_minutes_minutes(2);

confirmationModalTimeInput.addEventListener('change', (event) => {
  confirmationModalUnlockBtn.innerText =
    selected_lang.unlock_for_minutes_minutes(event.target.value);
});
