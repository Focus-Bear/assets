const getFocusTitle = (
  block_type,
  remainingTime,
  focus_block_completed,
  total_focus_blocked
) => {
  switch (block_type) {
    case FOCUS_BLOCK_OPTION.MORNING:
      return {
        title: "Blocked because you're doing your morning routine",
      };
    case FOCUS_BLOCK_OPTION.EVENING:
      return {
        title: "Blocked because you're doing your evening routine",
      };
    case FOCUS_BLOCK_OPTION.FOCUS_BLOCK_INPROGRESS:
      return {
        title: 'Nice work',
        sub_title: `you've been focused for ${remainingTime} ${
          focus_block_completed
            ? `and have already completed ${focus_block_completed} focus sessions.`
            : ''
        }`,
        additional_info: `Just ${remainingTime} to go until the end of your focus session.`,
      };
    case FOCUS_BLOCK_OPTION.FOCUS_BLOCK_OVER:
      return {
        title: 'Well done on finishing your focus session!',
        sub_title: `${
          focus_block_completed
            ? `You've completed ${focus_block_completed} focus sessions today for `
            : ''
        } ${
          total_focus_blocked
            ? ` a grand total of ${total_focus_blocked} of focused time.`
            : ''
        }`,
        additional_info:
          "Keep it up and you'll quickly make progress towards your long term goals.",
      };
    default:
      return {
        title: 'This site is always blocked',
      };
  }
};

const instructions = (url) =>
  `<a href="https://support.focusbear.io/portal/en/kb/articles/setting-up-always-blocked-sites-and-apps" target="_blank">${url} is configured to be always blocked. Click here for instructions on unblocking it.</a>`;

const getFocusTip = (block_type, old_url, current_url, focus_mode) => ({
  focus_tip_old_url: `<div class='notice-wrapper'>
    ${
      block_type
        ? ''
        : `<a href=${current_url}>Click here to re-open the original URL ${
            old_url ?? ''
          }</a>`
    }
    </div>`,
  focus_tip: `<div class='notice-wrapper'>
    ${
      block_type
        ? ''
        : `<a href=${current_url}>Click here to re-open the original URL ${
            old_url ?? ''
          }</a>`
    }
    <h6>Want to reprogram your brain so you stay on task during focus blocks?
      <a href="https://journals.sagepub.com/doi/abs/10.1177/1539449219876877?journalCode=otjb&">Research into breaking bad habits</a> indicates that if you take a positive action immediately after doing a bad habit, you'll start to disrupt the neural triggers for the bad habit. For example, you just opened ${old_url} when you were intending to focus${
    focus_mode ? ` on ${focus_mode}` : ``
  }. Try doing some deep breathing for 5 seconds, get up and stretch or go grab a glass of water. <a href="https://journals.sagepub.com/doi/full/10.1177/1539449219876877">Fritz et al's study</a> indicates this approach works much better than punishing yourself (no need to give yourself a mild electric shock for being so naughty). If you want a primer on the science of habit formation, <a href="https://hubermanlab.com/the-science-of-making-and-breaking-habits/">episode 53 of the Huberman Lab podcast</a> is worth a listen.</h6>
    </div>`,
});

const getExternalHint = () => {
  switch (domain) {
    case EXTERNAL_HINT_DOMAINS.REDDIT:
      return "Is this sub-reddit actually productive? If so, you can add it to your Focus Mode's allow list but still block the rest of Reddit.";
    case EXTERNAL_HINT_DOMAINS.YOUTUBE:
      return "Is this video actually productive? If so, you can add it to your Focus Mode's allow list but block the rest of Youtube.";
    default:
      return '';
  }
};
