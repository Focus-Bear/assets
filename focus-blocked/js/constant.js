const LOCAL_STORAGE = {
  IS_PAGE_LOADED: 'is_page_loaded',
  IS_PAGE_RELOADED: 'is_page_reloaded',
  IS_INTRO_SHOWED: 'is_intro_showed',
};

const EXTERNAL_HINT_DOMAINS = {
  REDDIT: 'reddit.com',
  YOUTUBE: 'youtube.com',
};

const FOCUS_BLOCK_OPTION = {
  FOCUS_BLOCK_OVER: 'focus_block_over',
  FOCUS_BLOCK_INPROGRESS: 'focus_block_inprogress',
  FOCUS_BLOCK_ALWAYS: 'always-block',
  FOCUS_BLOCK_ALWAYS_OLD: 'always-blocked',
  MORNING: 'morning',
  MORNING_HABIT: 'morning-habit',
  EVENING: 'evening',
  EVENING_HABIT: 'evening-habit',
};

const LANGUAGE = {
  EN: 'en',
  ES: 'es',
};

const FONT = {
  SEGEO_UI: 'SegoeUI',
  SAN_FRANCISCO: 'SanFrancisco',
  ARIAL: 'Arial',
  COMIC_SANS_MS: 'ComicSans',
  VERDANA: 'Verdana',
  TAHOMA: 'Tahoma',
  TREBUCHET_MS: 'TrebuchetMS',
  HELVETICA: 'Helvetica',
  INTEL_ONE_MONO: 'IntelOneMono',
  OPEN_DYSLEXIC: 'OpenDyslexic',
  CENTURY_GOTHIC: 'CenturyGothic',
  ROBOTO: 'Roboto',
  POPPINS: 'Poppins',
  SANS: 'Sans',
};

const FLAGS = {
  MORNING_ROUTINE_IN_PROGRESS: 'MORNING_ROUTINE_IN_PROGRESS',
  EVENING_ROUTINE_IN_PROGRESS: 'EVENING_ROUTINE_IN_PROGRESS',
};

const FOCUS_BLOCK_MODE = {
  CUDDLY: 'cuddly',
  GRIZZLY: 'grizzly',
};

const FOCUS_VERIFY_STATE = {
  INITIAL_QUESTION: 'initial-question',
  LOW_RELEVANCE: 'low-relevance',
  CONVINCE_AI: 'convince-ai',
  AI_RESPONSE: 'ai-response',
  SET_TIME_LIMIT: 'set-time-limit',
  VERIFICATION_COMPLETED: 'verification-completed',
};

const FOCUS_VERIFY_TIMEOUTS = {
  DEFAULT: 15,
  CONVINCE_AI: 59,
};

const FOCUS_VERIFY_PARAMS = {
  AI_FOCUS_BLOCK_ENABLED: 'ai-focus-block-enabled',
  AI_FOCUS_BLOCK_VERIFICATION_ENABLED: 'ai-focus-block-verification-enabled',
  AI_RELEVANCE_EXPLANATION: 'ai-relevance-explanation',
  AI_REASK_INTENTION: 'ai-reask-intention',
  WANT_ACHIEVE: 'want-achieve',
  WANT_ACHIEVE_TIME: 'want-achieve-time',
  BLOCK_IT: 'block-it',
  CONVINCE_AI_INTENTION: 'convince-ai-intention',
  YES_I_NEED: 'yes-i-need',
};
