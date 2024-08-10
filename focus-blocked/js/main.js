try {
  //@Description: it supports for older versions of the app
  if (!unblockBtn) {
    unblockBtn = document.getElementById('unblockBtn');
  }

  document.getElementById('privacyNoticeContent').innerHTML =
    selected_lang.privacy_notice;
  privacyBtn.textContent = selected_lang.privacy_button;
  cuddlyBearBtn.textContent = selected_lang.oops_i_actually_need_this;
  if (longTermGoalsTitle) {
    longTermGoalsTitle.textContent =
      selected_lang.every_focus_session_you_complete_is_taking_you_towards_long_term_goals;
  }
  unblockBtn.textContent = selected_lang.yes_i_actually_need_it;
  document.getElementById('popupClose').textContent =
    selected_lang.you_re_right_get_this_site_away_from_me;

  const url_always_block_instruction = instructions(
    domain,
    focusBlocksCompleted,
    totalFocusBlocksCompleted
  );
  if (block_type) {
    focusTitle.textContent = focus_blocked_message.title;
    if (
      [
        FOCUS_BLOCK_OPTION.FOCUS_BLOCK_ALWAYS_OLD,
        FOCUS_BLOCK_OPTION.FOCUS_BLOCK_ALWAYS,
      ].includes(block_type)
    ) {
      const instruction = document.createElement('div');
      instruction.innerHTML = url_always_block_instruction;
      focusProgressWrapper.appendChild(instruction);
      focusTipWrapper.style.display = 'none';
    } else {
      const durationElement = document.createElement('h2');
      durationElement.innerText = selected_lang.focus_block_duration_subtitle(
        moment()
          .startOf('date')
          .add(focusedTime, 'seconds')
          .format('HH[h]:mm[m]')
      );
      focusTipWrapper.style.display = 'flex';
      focusProgressWrapper.appendChild(durationElement);
      focusTipWrapper.innerHTML = `<a id='showFocusTip'>${selected_lang.get_a_tip_for_staying_focused}</a>`;
      document.getElementById('showFocusTip').onclick = function () {
        focusTipWrapper.innerText =
          selected_lang.click_here_to_re_open_the_original_url(old_url);
      };
    }
    focusBlockedOriginalUrl.setAttribute('href', current_url);
    focusBlockedOriginalUrl.textContent = selected_lang.original_url(old_url);
    focusSubtitle.style.display = 'none';
    focusAdditionalInfo.style.display = 'none';
  } else {
    focusTipWrapper.style.display = 'none';
    !isPageLoaded
      ? localStorage.setItem(LOCAL_STORAGE.IS_PAGE_LOADED, true)
      : localStorage.setItem(LOCAL_STORAGE.IS_PAGE_RELOADED, true);

    focusTitle.innerText = selected_lang.let_keep_the_focus_on(focus_mode);

    let refreshIntervalId = setInterval(
      () => {
        focusRemainingSeconds = focus_mode_end_time.diff(moment(), 'seconds');
        if (focusRemainingSeconds > 0) {
          const remainingTime = moment
            .duration(focus_mode_end_time.diff(moment()))
            .humanize(true);
          const focusBlockInfo = getFocusTitle(
            FOCUS_BLOCK_OPTION.FOCUS_BLOCK_INPROGRESS,
            remainingTime
          );
          if (
            (totalFocusBlocksCompleted || focusBlocksCompleted) &&
            focusBlockInfo?.sub_title
          ) {
            focusSubtitle.textContent = focusBlockInfo?.sub_title;
            focusProgressWrapper.appendChild(focusSubtitle);
          }
          if (focusBlockInfo?.additional_info) {
            focusAdditionalInfo.textContent = focusBlockInfo?.additional_info;
            focusProgressWrapper.appendChild(focusAdditionalInfo);
          }
          focusBlockedOriginalUrl.setAttribute('href', current_url);
          focusBlockedOriginalUrl.textContent =
            selected_lang.click_here_to_re_open_the_original_url(old_url);
        } else {
          clearInterval(refreshIntervalId);
          const focusBlockInfo = getFocusTitle(
            FOCUS_BLOCK_OPTION.FOCUS_BLOCK_OVER
          );
          if (focusBlockInfo.title) {
            focusTitle.textContent = focusBlockInfo.title;
          } else {
            //@Description: it supports for older versions of the app
            focusTitle.innerText = selected_lang.focus_block_is_over;
          }
          if (focusSubtitle) {
            focusSubtitle.textContent = focusBlockInfo?.sub_title;
          }
          if (focusAdditionalInfo) {
            focusAdditionalInfo.textContent = focusBlockInfo?.additional_info;
          }
          focusBlockedOriginalUrl.setAttribute('href', current_url);
          focusBlockedOriginalUrl.textContent =
            selected_lang.click_here_to_re_open_the_original_url(old_url);
          localStorage.removeItem(LOCAL_STORAGE.IS_PAGE_LOADED);
          localStorage.removeItem(LOCAL_STORAGE.IS_PAGE_RELOADED);
          if (isPageReloaded) {
            window.location.href = old_url;
          }
        }
      },
      1000,
      focus_mode_end_time,
      current_url,
      old_url
    );
  }

  const save_page_url_btn = document.createElement('a');
  save_page_url_btn.innerHTML =
    selected_lang.save_this_page_for_later(current_url);
  save_page_url_btn.setAttribute(
    'href',
    `https://dashboard.focusbear.io/todo?tab=procrastinate&url=${encodeURI(
      current_url
    )}`
  );
  save_page_url_btn.setAttribute('target', '_blank');
  save_page_url_btn.setAttribute('id', 'save_page_url_btn');
  focusProgressWrapper.appendChild(save_page_url_btn);

  privacyBtn.addEventListener('click', () => {
    let noticeElement = document.getElementById('privacyNoticeContent');
    let noticeElementArrow = document.getElementById(
      'privacyNoticeContentArrow'
    );
    if (noticeElement.className === 'hidePrivacyNotice') {
      noticeElement.className = 'privacyNotice';
      noticeElementArrow.className = 'privacyNoticeContentArrow';
    } else {
      noticeElement.className = 'hidePrivacyNotice';
      noticeElementArrow.className = 'hidePrivacyNotice';
    }
  });

  if (cuddly_bear_mode && !strict_blocking) {
    cuddlyBearBtn.className = 'showCuddlyBearBtn';
    unblockBtn.addEventListener('click', () => {
      //@Description: desktop apps requested and the rest of operation will be handle by the desktop apps
      window.location.href = `${window.location.href}&unblock_it=true`;
      // window.open(
      //   `${current_url}${
      //     current_url.includes('?') ? '&' : '?'
      //   }focus_bear_temporarily_allow=true&unblock_url=true`,
      //   '_self'
      // );
    });
    if (blocked_reason) {
      toast.innerHTML = blocked_reason;
      toast.classList.add('visible');
      setTimeout(() => {
        toast.classList.remove('visible');
      }, 5000);
    }

    if (isExternalHintRequired) {
      toast.innerHTML = getExternalHint();
      toast.classList.add('visible');
      setTimeout(() => {
        toast.classList.remove('visible');
      }, 5000);
    }
  } else {
    cuddlyBearBtn.className = 'hideCuddlyBearBtn';
  }

  if (longTermGoalsContainer) {
    //@Description: it supports for older versions of the app
    if (longTermGoals?.length && longTermGoals.every(Boolean)) {
      longTermGoals.forEach((goal) => {
        const listItem = document.createElement('li');
        listItem.append(document.createTextNode(goal));
        goalsContainer.appendChild(listItem);
      });
      const anchor = document.createElement('a');
      anchor.append(
        document.createTextNode(
          selected_lang.click_here_to_edit_your_long_term_goals
        )
      );
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('href', 'https://dashboard.focusbear.io/profile');
      goalsContainer.appendChild(anchor);
    } else {
      longTermGoalsContainer.style.display = 'none';
    }
  }
} catch (error) {
  const general_error = document.createElement('h1');
  general_error.innerText = selected_lang.general_error;
  general_error.style.cssText = `
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10vw;
  text-align: center;
  background: #FFE4C6be;
`;
  document.body.appendChild(general_error);
  Sentry.captureException(JSON.stringify(error));
}
