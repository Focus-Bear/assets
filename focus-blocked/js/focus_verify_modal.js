let currentState = FOCUS_VERIFY_STATE.INITIAL_QUESTION;
let timerIntervalId;
let seconds;
let allowed_time = null;
let convince_reason = '';
let intention_reason = '';

const stateElements = {
  [FOCUS_VERIFY_STATE.INITIAL_QUESTION]: initialQuestionState,
  [FOCUS_VERIFY_STATE.LOW_RELEVANCE]: lowRelevanceState,
  [FOCUS_VERIFY_STATE.CONVINCE_AI]: convinceAiState,
  [FOCUS_VERIFY_STATE.AI_RESPONSE]: aiResponseState,
  [FOCUS_VERIFY_STATE.SET_TIME_LIMIT]: setTimeLimitState,
};

const timerElements = {
  [FOCUS_VERIFY_STATE.INITIAL_QUESTION]: timerInitialQuestion,
  [FOCUS_VERIFY_STATE.LOW_RELEVANCE]: timerLowRelevance,
  [FOCUS_VERIFY_STATE.CONVINCE_AI]: timerConvinceAi,
  [FOCUS_VERIFY_STATE.AI_RESPONSE]: timerAiResponse,
  [FOCUS_VERIFY_STATE.SET_TIME_LIMIT]: timerSetTimeLimit,
};

function setState(state) {
  if (state === FOCUS_VERIFY_STATE.VERIFICATION_COMPLETED) {
    clearInterval(timerIntervalId);
    focusVerifyModal.classList.add('hide');
    convince_reason = '';
    intention_reason = '';
    allowed_time = null;
  } else {
    currentState = state;
    Object.values(stateElements).forEach((el) => el.classList.remove('active'));
    if (stateElements[state]) stateElements[state].classList.add('active');
    seconds =
      state === FOCUS_VERIFY_STATE.CONVINCE_AI
        ? FOCUS_VERIFY_TIMEOUTS.CONVINCE_AI
        : FOCUS_VERIFY_TIMEOUTS.DEFAULT;
    startTimer();
  }
}

function startTimer() {
  clearInterval(timerIntervalId);
  updateTimerDisplay();

  timerIntervalId = setInterval(() => {
    seconds--;
    updateTimerDisplay();

    if (seconds <= 0) {
      clearInterval(timerIntervalId);
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

function handleNoClick() {
  focusVerifyModal.classList.add('hide');
}

function updateConfirmActionBtnState(value) {
  aiFocusBlockConfirmActionBtn.disabled = !value;
}

function setupEventListeners() {
  convinceReason.addEventListener('input', (event) => {
    const value = event.target.value;
    convince_reason = value;
    updateConfirmActionBtnState(value);
  });

  setTimeLimitReason.addEventListener('input', (event) => {
    const value = event.target.value;
    intention_reason = value;
    allowed_time && updateConfirmActionBtnState(value);
  });

  aiFocusBlockConfirmActionBtn.addEventListener('click', () => {
    let nextState = FOCUS_VERIFY_STATE.COMPLETED;
    if (currentState === FOCUS_VERIFY_STATE.INITIAL_QUESTION) {
      nextState = FOCUS_VERIFY_STATE.LOW_RELEVANCE;
    } else if (currentState === FOCUS_VERIFY_STATE.LOW_RELEVANCE) {
      aiFocusBlockConfirmActionBtn.innerText = selected_lang.convince_the_ai;
      aiFocusBlockCancelActionBtn.innerText = selected_lang.cancel;
      updateConfirmActionBtnState(convince_reason);
      nextState = FOCUS_VERIFY_STATE.CONVINCE_AI;
    } else if (currentState === FOCUS_VERIFY_STATE.CONVINCE_AI) {
      aiFocusBlockConfirmActionBtn.innerText = selected_lang.yes;
      aiFocusBlockCancelActionBtn.innerText = selected_lang.no;
      nextState = FOCUS_VERIFY_STATE.AI_RESPONSE;
    } else if (currentState === FOCUS_VERIFY_STATE.AI_RESPONSE) {
      updateConfirmActionBtnState(intention_reason);
      aiFocusBlockConfirmActionBtn.innerText = selected_lang.set_intention;
      aiFocusBlockCancelActionBtn.innerText = selected_lang.cancel;
      nextState = FOCUS_VERIFY_STATE.SET_TIME_LIMIT;
    } else {
      nextState = FOCUS_VERIFY_STATE.VERIFICATION_COMPLETED;
    }
    setState(nextState);
  });

  aiFocusBlockCancelActionBtn.addEventListener('click', handleNoClick);

  timeOptions.forEach((option) => {
    option.addEventListener('click', function () {
      document
        .querySelectorAll('.time-option')
        .forEach((el) => el.classList.remove('selected'));
      this.classList.add('selected');
      allowed_time = parseFloat(this.dataset.minutes);
      intention_reason && updateConfirmActionBtnState(allowed_time);
    });
  });
}

function initUI() {
  aiFocusBlockConfirmActionBtn.innerText = selected_lang.yes;
  aiFocusBlockCancelActionBtn.innerText =
    selected_lang.no_i_was_getting_distracted;

  initialQuestionState.querySelector('.question').innerHTML =
    selected_lang.do_you_need_to_user_url_when_you_are_focusing(
      current_url,
      focusModeIntention
    );
  initialQuestionState.querySelector('.intention-info').innerHTML =
    selected_lang.yor_intention_was_intention(focusModeIntention);

  lowRelevanceState.querySelector('.question').innerHTML =
    selected_lang.do_you_need_to_user_url_when_you_are_focusing(
      current_url,
      focusModeIntention
    );
  lowRelevanceState.querySelector('.explanation').textContent =
    aiRelevanceExplanation;
  lowRelevanceState.querySelector('.relevance-score').innerHTML =
    selected_lang.ai_relevance_score_for_this_site(aiRelevanceScore);

  convinceAiState.querySelector('h3').textContent =
    selected_lang.convince_the_ai_why_its_necessary;
  convinceAiState.querySelector('.explanation').textContent =
    selected_lang.give_more_info_to_the_ai_to_explain_why_you_need_to_use_this_site;
  convinceReason.placeholder =
    selected_lang.explain_why_you_need_this_site_for_intention(
      focusModeIntention
    );

  aiResponseState.querySelector('h3').textContent =
    selected_lang.ai_still_thinks_this_site_is_distracting;
  aiResponseState.querySelector('h5').textContent =
    selected_lang.ai_relevance_score_for_this_site_score(aiRelevanceScore);
  aiResponseState.querySelector('.explanation').textContent =
    selected_lang.focus_bears_ai_still_thinks_url_isn_t_relevant(current_url);

  setTimeLimitState.querySelector('.question').textContent =
    selected_lang.what_do_you_want_to_achieve_during_your_time_here;
  setTimeLimitState.querySelector('label').textContent =
    selected_lang.select_minutes_to_use_this_site;
  setTimeLimitReason.placeholder = selected_lang.your_intention;
}

if (aiFocusBlock && current_url) {
  focusVerifyModal.classList.contains('hide') &&
    focusVerifyModal.classList.remove('hide');
  initUI();
  setupEventListeners();
  setState(FOCUS_VERIFY_STATE.INITIAL_QUESTION);
} else {
  !focusVerifyModal.classList.contains('hide') &&
    focusVerifyModal.classList.add('hide');
}
