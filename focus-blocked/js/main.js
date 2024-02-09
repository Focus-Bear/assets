if (block_type) {
  document.getElementById('focusTitle').innerText = blocked_message;

  if (['always-block', 'always-blocked'].includes(block_type)) {
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
      !block_type.includes('always-block')
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
      if (focus_mode_end_time.diff(moment(), 'seconds') > 0) {
        document.getElementById(
          'progressWrapper'
        ).innerHTML = `<p id="focusProgressNotice">Your focus block will end ${moment
          .duration(focus_mode_end_time.diff(moment()))
          .humanize(
            true
          )}</p> <a href='${current_url}'>Original URL ${old_url}</a>`;
      } else {
        clearInterval(refreshIntervalId);
        document.getElementById('focusTitle').innerText =
          'Focus block is over!';
        document.getElementById('progressWrapper').innerHTML =
          focus_tip_old_url;
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
    focus_mode_end_time
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
