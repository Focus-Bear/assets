const getFocusTitle = (block_type, remainingTime) => {
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
        sub_title:
          "you've been focused for 45 minutes and have already completed 2 focus sessions.",
        additional_info: `Just ${remainingTime} to go until the end of your focus session.`,
      };
    case FOCUS_BLOCK_OPTION.FOCUS_BLOCK_OVER:
      return {
        title: 'Well done on finishing your focus session!',
        sub_title:
          "You've completed 5 focus sessions today for a grand total of 45 minutes of focused time.",
        additional_info:
          "Keep it up and you'll quickly make progress towards your long term goals.",
      };
    default:
      return {
        title: 'This site is always blocked',
      };
  }
};

/* Show the relevant instructions based on the operating system */
const instructions = ['Macintosh,', 'iPhone', 'iPad'].some((userAgent) =>
  navigator.userAgent.includes(userAgent)
)
  ? {
      info: 'Preferences > Settings > Strictness > Super Distracting Sites',
      image: 'https://images.focusbear.io/focusbear_blocksites.jpg',
    }
  : {
      info: 'Preferences > Settings > Blocked URLs > Super Distracting Sites',
      image: 'https://images.focusbear.io/focusbear_blocksites_windows.png',
    };

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
