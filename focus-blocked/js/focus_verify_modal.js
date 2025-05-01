let currentState = FOCUS_VERIFY_MODAL.INITIAL_QUESTION;
let timerInterval;
let seconds = 15;
let selectedTime = null;

const stateElements = {
  [FOCUS_VERIFY_MODAL.INITIAL_QUESTION]: initialQuestionState,
  [FOCUS_VERIFY_MODAL.LOW_RELEVANCE]: lowRelevanceState,
  [FOCUS_VERIFY_MODAL.CONVINCE_AI]: convinceAiState,
  [FOCUS_VERIFY_MODAL.AI_RESPONSE]: aiResponseState,
  [FOCUS_VERIFY_MODAL.SET_TIME_LIMIT]: setTimeLimitState,
};

const buttonElements = {
  [FOCUS_VERIFY_MODAL.INITIAL_QUESTION]: initialQuestionButtons,
  [FOCUS_VERIFY_MODAL.LOW_RELEVANCE]: lowRelevanceButtons,
  [FOCUS_VERIFY_MODAL.CONVINCE_AI]: convinceAiButtons,
  [FOCUS_VERIFY_MODAL.AI_RESPONSE]: aiResponseButtons,
  [FOCUS_VERIFY_MODAL.SET_TIME_LIMIT]: setTimeLimitButtons,
};

const timerElements = {
  [FOCUS_VERIFY_MODAL.INITIAL_QUESTION]: timerInitialQuestion,
  [FOCUS_VERIFY_MODAL.LOW_RELEVANCE]: timerLowRelevance,
  [FOCUS_VERIFY_MODAL.CONVINCE_AI]: timerConvinceAi,
  [FOCUS_VERIFY_MODAL.AI_RESPONSE]: timerAiResponse,
  [FOCUS_VERIFY_MODAL.SET_TIME_LIMIT]: timerSetTimeLimit,
};

function setState(state) {
  currentState = state;

  Object.values(stateElements).forEach((el) => el.classList.remove('active'));
  Object.values(buttonElements).forEach((el) => el.classList.remove('active'));

  if (stateElements[state]) stateElements[state].classList.add('active');
  if (buttonElements[state]) buttonElements[state].classList.add('active');

  seconds = state === FOCUS_VERIFY_MODAL.CONVINCE_AI ? 59 : 15;
  startTimer();
}

function setupEventListeners() {
  initialQuestionYesBtn.addEventListener('click', () => {
    setState(FOCUS_VERIFY_MODAL.LOW_RELEVANCE);
  });

  yesLowRelevanceBtn.addEventListener('click', () => {
    setState(FOCUS_VERIFY_MODAL.CONVINCE_AI);
  });

  convinceSubmitBtn.addEventListener('click', () => {
    setState(FOCUS_VERIFY_MODAL.AI_RESPONSE);
  });

  yesAiResponseBtn.addEventListener('click', () => {
    setState(FOCUS_VERIFY_MODAL.SET_TIME_LIMIT);
  });

  setIntentionBtn.addEventListener('click', () => {
    setState(FOCUS_VERIFY_MODAL.INITIAL_QUESTION);
  });

  initialQuestionNoBtn.addEventListener('click', handleNoClick);
  noLowRelevanceBtn.addEventListener('click', handleNoClick);
  cancelConvinceBtn.addEventListener('click', handleNoClick);
  noAiResponseBtn.addEventListener('click', handleNoClick);
  cancelTimeLimitBtn.addEventListener('click', handleNoClick);

  timeOptions.forEach((option) => {
    option.addEventListener('click', function () {
      document
        .querySelectorAll('.time-option')
        .forEach((el) => el.classList.remove('selected'));
      this.classList.add('selected');
      selectedTime = parseFloat(this.dataset.minutes);
    });
  });
}

function handleNoClick() {
  //TODO
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    seconds--;
    updateTimerDisplay();

    if (seconds <= 0) {
      clearInterval(timerInterval);
      handleNoClick();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerElement = timerElements[currentState];
  if (timerElement) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerElement.textContent = `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  }
}

function initFocusVerify() {
  setupEventListeners();
  setState(FOCUS_VERIFY_MODAL.INITIAL_QUESTION);
}
