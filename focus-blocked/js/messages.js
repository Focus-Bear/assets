const getFocusTitle = (
  block_type,
  remainingTime,
  focus_block_completed,
  total_focus_blocked
) => {
  if (block_type === FOCUS_BLOCK_OPTION.MORNING) {
    return {
      title: selected_lang.blocked_because_you_are_doing_your_morning_routine,
    };
  } else if (
    [FOCUS_BLOCK_OPTION.EVENING, FOCUS_BLOCK_OPTION.EVENING_HABIT].includes(
      block_type
    )
  ) {
    return {
      title: selected_lang.blocked_because_you_are_doing_your_evening_routine,
      sub_title: selected_lang.focus_block_inprogress_subtitle(
        remainingTime,
        focus_block_completed
      ),
    };
  } else if (block_type === FOCUS_BLOCK_OPTION.FOCUS_BLOCK_INPROGRESS) {
    return {
      title: selected_lang.focus_block_inprogress_title,
      sub_title: selected_lang.focus_block_inprogress_subtitle(
        remainingTime,
        focus_block_completed
      ),
      additional_info:
        selected_lang.focus_block_inprogress_additionalInfo(remainingTime),
    };
  } else if (block_type === FOCUS_BLOCK_OPTION.FOCUS_BLOCK_OVER)
    return {
      title: selected_lang.focus_block_over_title,
      sub_title: selected_lang.focus_block_over_subtitle(
        focus_block_completed,
        total_focus_blocked
      ),
      additional_info: selected_lang.focus_block_over_additionalInfo,
    };
  else {
    return {
      title: selected_lang.this_site_is_always_blocked,
    };
  }
};

const instructions = (url) =>
  `<a href="https://support.focusbear.io/portal/en/kb/articles/setting-up-always-blocked-sites-and-apps-in-focus-bear" target="_blank">${selected_lang.url_is_configured_to_be_always_blocked(
    url
  )}</a>`;

const getExternalHint = () => {
  switch (domain) {
    case EXTERNAL_HINT_DOMAINS.REDDIT:
      return selected_lang.is_this_sub_reddit_actually_productive;
    case EXTERNAL_HINT_DOMAINS.YOUTUBE:
      return selected_lang.is_this_video_actually_productive;
    default:
      return '';
  }
};
