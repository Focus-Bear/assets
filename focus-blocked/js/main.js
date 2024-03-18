const { focus_tip, focus_tip_old_url } = getFocusTip(
  block_type,
  old_url,
  current_url,
  focus_mode
);

if (block_type) {
  document.getElementById('focusTitle').textContent =
    focus_blocked_message.title;
  if (
    [
      FOCUS_BLOCK_OPTION.FOCUS_BLOCK_ALWAYS_OLD,
      FOCUS_BLOCK_OPTION.FOCUS_BLOCK_ALWAYS,
    ].includes(block_type)
  ) {
    const imgElement = document.createElement('img');
    imgElement.src = instructions.image;
    document.getElementById(
      'progressWrapper'
    ).innerHTML = `<div class='notice-wrapper'><h6 class='centeredText'>${old_url} is configured to be always blocked. If you want to allow ${old_url}, go to: <br>${instructions.info}</h6></div>`;
    document.getElementById('progressWrapper').appendChild(imgElement);
  } else {
    document.getElementById(
      'progressWrapper'
    ).innerHTML = `<div class='notice-wrapper'><h6 class='centeredText'>Back to your plans for world domination! Save ${
      !block_type.includes(FOCUS_BLOCK_OPTION.FOCUS_BLOCK_ALWAYS)
        ? `<a href='${old_url}''>${old_url}</a>`
        : old_url
    } for when you've finished boiling the oceans.</h6></div>`;
    document.getElementById(
      'focusTipWrapper'
    ).innerHTML = `<a id='showFocusTip'>Get a tip for staying focused</a>`;
    document.getElementById('showFocusTip').onclick = function () {
      document.getElementById('focusTipWrapper').innerHTML = focus_tip;
    };
  }
} else {
  !isPageLoaded
    ? Storage.setItem(LOCAL_STORAGE.IS_PAGE_LOADED, true)
    : Storage.setItem(LOCAL_STORAGE.IS_PAGE_RELOADED, true);

  document.getElementById('focusTitle').innerText =
    "Let's keep the focus on " + focus_mode;

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
        if (focusBlockInfo?.sub_title) {
          focusSubtitle.textContent = focusBlockInfo?.sub_title;
          focusProgressWrapper.appendChild(focusSubtitle);
        }
        if (focusBlockInfo?.additional_info) {
          focusAdditionalInfo.textContent = focusBlockInfo?.additional_info;
          focusProgressWrapper.appendChild(focusAdditionalInfo);
        }
        focusBlockedUrl.setAttribute('href', current_url);
        focusBlockedUrl.textContent = `Original URL ${old_url}`;
      } else {
        clearInterval(refreshIntervalId);
        const focusBlockInfo = getFocusTitle(
          FOCUS_BLOCK_OPTION.FOCUS_BLOCK_OVER
        );
        focusTitle.textContent = focusBlockInfo.title;
        focusSubtitle.textContent = focusBlockInfo?.sub_title;
        focusAdditionalInfo.textContent = focusBlockInfo?.additional_info;
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

if (longTermGoals?.length) {
  longTermGoals.forEach((goal) => {
    const object = document.createElement('object');
    object.setAttribute('data', './images/goal.svg');
    const listItem = document.createElement('li');
    listItem.append(object);
    listItem.append(document.createTextNode(goal));
    goalsContainer.appendChild(listItem);
  });
  const anchor = document.createElement('a');
  anchor.append(
    document.createTextNode('Click here to edit your long term goals')
  );
  anchor.setAttribute('href', 'https://dashboard.focusbear.io/profile');
  goalsContainer.appendChild(anchor);
} else {
  document.getElementById('longTermGoalsContainer').style.display = 'none';
}
