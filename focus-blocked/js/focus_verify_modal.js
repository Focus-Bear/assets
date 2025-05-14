let currentState = FOCUS_VERIFY_STATE.INITIAL_QUESTION;
let timerIntervalId;
let seconds;
let allowed_time = null;
let convince_reason = '';
let intention_reason = '';
const modalClassNames = focusVerifyModal.classList;

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
    updateQueryParamsAndReload(
      [
        { [FOCUS_VERIFY_PARAMS.WANT_ACHIEVE]: intention_reason },
        { [FOCUS_VERIFY_PARAMS.WANT_ACHIEVE_TIME]: allowed_time },
      ],
      [FOCUS_VERIFY_PARAMS.AI_FOCUS_BLOCK]
    );
    clearInterval(timerIntervalId);
    modalClassNames.add('hide');
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

function updateQueryParamsAndReload(params = [], keysToRemove = []) {
  const url = new URL(window.location.href);

  for (const key of keysToRemove) {
    url.searchParams.delete(key);
  }

  params.forEach((param) => {
    for (const [key, value] of Object.entries(param)) {
      url.searchParams.set(key, value);
    }
  });

  window.location.href = url.toString();
}

function handleNoClick() {
  modalClassNames.add('hide');
  updateQueryParamsAndReload(
    [{ [FOCUS_VERIFY_PARAMS.BLOCK_IT]: true }],
    [FOCUS_VERIFY_PARAMS.AI_FOCUS_BLOCK]
  );
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
      updateQueryParamsAndReload(
        [{ [FOCUS_VERIFY_PARAMS.YES_I_NEED]: true }],
        [FOCUS_VERIFY_PARAMS.AI_FOCUS_BLOCK]
      );
    } else if (currentState === FOCUS_VERIFY_STATE.LOW_RELEVANCE) {
      aiFocusBlockConfirmActionBtn.innerText = selected_lang.convince_the_ai;
      aiFocusBlockCancelActionBtn.innerText = selected_lang.cancel;
      nextState = FOCUS_VERIFY_STATE.CONVINCE_AI;
    } else if (currentState === FOCUS_VERIFY_STATE.CONVINCE_AI) {
      updateQueryParamsAndReload(
        [{ [FOCUS_VERIFY_PARAMS.CONVINCE_AI_INTENTION]: convince_reason }],
        [FOCUS_VERIFY_PARAMS.AI_FOCUS_BLOCK]
      );
      aiFocusBlockConfirmActionBtn.innerText = selected_lang.yes;
      aiFocusBlockCancelActionBtn.innerText = selected_lang.no;
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

  const initialIntentionInfoDiv =
    initialQuestionState.querySelector('.intention-info');
  if (focusModeIntention) {
    initialIntentionInfoDiv.style.display = 'inline-flex';
    initialIntentionInfoDiv.innerHTML =
      selected_lang.yor_intention_was_intention(focusModeIntention);
  } else {
    initialIntentionInfoDiv.style.display = 'none';
  }

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

  const aiConvinceResponseDiv = aiResponseState.querySelector(
    '.ai-convince-response'
  );
  if (aiConvinceResponse) {
    aiConvinceResponseDiv.textContent = aiConvinceResponse;
    aiConvinceResponseDiv.style.display = 'inline-flex';
  } else {
    aiConvinceResponseDiv.style.display = 'none';
  }

  aiResponseState.querySelector('.explanation').textContent =
    selected_lang.focus_bears_ai_still_thinks_url_isn_t_relevant(current_url);

  setTimeLimitState.querySelector('.question').textContent =
    selected_lang.what_do_you_want_to_achieve_during_your_time_here;
  setTimeLimitState.querySelector('label').textContent =
    selected_lang.select_minutes_to_use_this_site;
  setTimeLimitReason.placeholder = selected_lang.your_intention;
}

if (aiFocusBlock && current_url) {
  modalClassNames.contains('hide') && modalClassNames.remove('hide');
  initUI();
  setupEventListeners();
  let initState = aiRelevanceExplanation
    ? FOCUS_VERIFY_STATE.LOW_RELEVANCE
    : aiConvinceResponse
    ? FOCUS_VERIFY_STATE.AI_RESPONSE
    : FOCUS_VERIFY_STATE.INITIAL_QUESTION;
  setState(initState);
} else {
  !modalClassNames.contains('hide') && modalClassNames.add('hide');
}
