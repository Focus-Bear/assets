if (
  isonboarding ||
  show_tour ||
  !localStorage.getItem(LOCAL_STORAGE.IS_INTRO_SHOWED)
) {
  const tour = new TourGuideClient({
    steps: [
      {
        title: selected_lang.intro_oops_i_actually_need_this,
        content: '',
        target: cuddlyBearBtn,
      },
      {
        title: selected_lang.intro_long_term_goals,
        content: '',
        target: longTermGoalsContainer,
      },
      {
        title: selected_lang.intro_save_url_later,
        content: '',
        target: focusProgressWrapper,
      },
      {
        title: selected_lang.intro_original_url,
        content: '',
        target: focusBlockedOriginalUrl,
      },
    ],
  });

  tour.finishTour().then(() => {
    localStorage.setItem(LOCAL_STORAGE.IS_INTRO_SHOWED, 'DONE');
  });

  tour.start();
}
