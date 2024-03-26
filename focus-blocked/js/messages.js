const getFocusTitle = (
  block_type,
  remainingTime,
  focus_block_completed,
  total_focus_blocked
) => {
  switch (block_type) {
    case FOCUS_BLOCK_OPTION.MORNING:
      return {
        title: selected_lang.blocked_because_you_are_doing_your_morning_routine,
      };
    case FOCUS_BLOCK_OPTION.EVENING:
      return {
        title: selected_lang.blocked_because_you_are_doing_your_evening_routine,
      };
    case FOCUS_BLOCK_OPTION.FOCUS_BLOCK_INPROGRESS:
      return {
        title: selected_lang.focus_block_inprogress_title,
        sub_title: selected_lang.focus_block_inprogress_subtitle(
          remainingTime,
          focus_block_completed
        ),
        additional_info:
          selected_lang.focus_block_inprogress_additionalInfo(remainingTime),
      };
    case FOCUS_BLOCK_OPTION.FOCUS_BLOCK_OVER:
      return {
        title: selected_lang.focus_block_over_title,
        sub_title: selected_lang.focus_block_over_subtitle(
          focus_block_completed,
          total_focus_blocked
        ),
        additional_info: selected_lang.focus_block_over_additionalInfo,
      };
    default:
      return {
        title: selected_lang.this_site_is_always_blocked,
      };
  }
};

const instructions = (url) =>
  `<a href="https://support.focusbear.io/portal/en/kb/articles/setting-up-always-blocked-sites-and-apps" target="_blank">${selected_lang.url_is_configured_to_be_always_blocked(
    url
  )}</a>`;

const getFocusTip = (block_type, old_url, current_url, focus_mode) => ({
  focus_tip_old_url: `<div class='notice-wrapper'>
    ${
      block_type
        ? ''
        : `<a href=${current_url}>${selected_lang.click_here_to_re_open_the_original_url(
            old_url
          )}</a>`
    }
    </div>`,
  focus_tip: `<div class='notice-wrapper'>
    ${
      block_type
        ? ''
        : `<a href=${current_url}>${selected_lang.click_here_to_re_open_the_original_url(
            old_url
          )}</a>`
    }
    ${selected_lang.focus_tip(focus_mode, old_url)}
    </div>`,
});

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
