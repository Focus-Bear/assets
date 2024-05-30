const { focus_tip, focus_tip_old_url } = getFocusTip(
  block_type,
  old_url,
  current_url,
  focus_mode
);

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
  } else {
    const durationElement = document.createElement('h2');
    durationElement.innerText = selected_lang.focus_block_duration_subtitle(
      moment().startOf('date').add(focusedTime, 'seconds').format('HH[h]:mm[m]')
    );

    focusProgressWrapper.appendChild(durationElement);
    focusTipWrapper.innerHTML = `<a id='showFocusTip'>${selected_lang.get_a_tip_for_staying_focused}</a>`;
    document.getElementById('showFocusTip').onclick = function () {
      focusTipWrapper.innerHTML = focus_tip;
    };
  }
  focusSubtitle.style.display = 'none';
  focusAdditionalInfo.style.display = 'none';
} else {
  !isPageLoaded
    ? Storage.setItem(LOCAL_STORAGE.IS_PAGE_LOADED, true)
    : Storage.setItem(LOCAL_STORAGE.IS_PAGE_RELOADED, true);

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
        focusBlockedUrl.setAttribute('href', current_url);
        focusBlockedUrl.textContent = selected_lang.original_url(old_url);
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
        focusProgressWrapper.innerHTML = focus_tip_old_url;
        Storage.clearItems([
          LOCAL_STORAGE.IS_PAGE_LOADED,
          LOCAL_STORAGE.IS_PAGE_RELOADED,
        ]);
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
save_page_url_btn.innerHTML = selected_lang.save_this_page_for_later;
save_page_url_btn.setAttribute(
  'href',
  `https://dashboard.focusbear.io/todo?tab=procrastinate&url=${
    new URL(old_url).origin
  }`
);
save_page_url_btn.setAttribute('target', '_blank');
save_page_url_btn.setAttribute('id', 'save_page_url_btn');
focusProgressWrapper.appendChild(save_page_url_btn);

privacyBtn.addEventListener('click', () => {
  let noticeElement = document.getElementById('privacyNoticeContent');
  let noticeElementArrow = document.getElementById('privacyNoticeContentArrow');
  if (noticeElement.className === 'hidePrivacyNotice') {
    noticeElement.className = 'privacyNotice';
    noticeElementArrow.className = 'privacyNoticeContentArrow';
  } else {
    noticeElement.className = 'hidePrivacyNotice';
    noticeElementArrow.className = 'hidePrivacyNotice';
  }
});

if (cuddlyBearMode) {
  cuddlyBearBtn.className = 'showCuddlyBearBtn';
} else {
  cuddlyBearBtn.className = 'hideCuddlyBearBtn';
}

unblockBtn.addEventListener('click', () => {
  if (old_url.includes('?')) {
    window.open(`${old_url}&focus_bear_temporarily_allow=true`, '_self');
  } else {
    window.open(`${old_url}?focus_bear_temporarily_allow=true`, '_self');
  }
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

if (longTermGoalsContainer) {
  //@Description: it supports for older versions of the app
  if (longTermGoals?.length) {
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
