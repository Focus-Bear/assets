const locale = {
  en: {
    blocked_because_you_are_doing_your_morning_routine:
      "Blocked because you're doing your morning routine",
    blocked_because_you_are_doing_your_evening_routine:
      "Blocked because you're doing your evening routine",
    focus_block_inprogress_title: 'Nice work',
    focus_block_inprogress_subtitle: (remainingTime, focusBlockCompleted) =>
      `you've been focused for ${remainingTime} ${
        focusBlockCompleted
          ? `and have already completed ${focusBlockCompleted} focus sessions.`
          : ''
      }`,
    focus_block_inprogress_additionalInfo: (remainingTime) =>
      `Just ${remainingTime} to go until the end of your focus session.`,
    focus_block_over_title: 'Well done on finishing your focus session!',
    focus_block_over_subtitle: (focusBlockCompleted, totalFocusBlocked) =>
      `${
        focusBlockCompleted
          ? `You've completed ${focusBlockCompleted} focus sessions today for `
          : ''
      } ${
        totalFocusBlocked
          ? `a grand total of ${totalFocusBlocked} of focused time.`
          : ''
      }`,
    focus_block_over_additionalInfo:
      "Keep it up and you'll quickly make progress towards your long term goals.",
    this_site_is_always_blocked: 'This site is always blocked',
    this_site_is_set_as_super_distracting_instructions: `<div class="supper-distraction-wrapper"><p>This site is set as super distracting</p> <a href="https://support.focusbear.io/portal/en/kb/articles/setting-up-always-blocked-sites-and-apps-in-focus-bear" target="_blank">Click here for instructions on unblocking it.</a></div>`,
    click_here_to_re_open_the_original_url: (url) =>
      `Click here to re-open the original URL ${url ?? ''}`,
    is_this_sub_reddit_actually_productive:
      "Is this sub-reddit actually productive? If so, you can add it to your Focus Mode's allow list but still block the rest of Reddit.",
    is_this_video_actually_productive:
      "Is this video actually productive? If so, you can add it to your Focus Mode's allow list but block the rest of Youtube.",
    focus_tip: (
      focus_mode,
      old_url
    ) => `<h6>Want to reprogram your brain so you stay on task during focus blocks?
      <a href="https://journals.sagepub.com/doi/abs/10.1177/1539449219876877?journalCode=otjb&">Research into breaking bad habits</a> indicates that if you take a positive action immediately after doing a bad habit, you'll start to disrupt the neural triggers for the bad habit. For example, you just opened ${old_url} when you were intending to focus${
      focus_mode ? ` on ${focus_mode}` : ``
    }. Try doing some deep breathing for 5 seconds, get up and stretch or go grab a glass of water. <a href="https://journals.sagepub.com/doi/full/10.1177/1539449219876877">Fritz et al's study</a> indicates this approach works much better than punishing yourself (no need to give yourself a mild electric shock for being so naughty). If you want a primer on the science of habit formation, <a href="https://hubermanlab.com/the-science-of-making-and-breaking-habits/">episode 53 of the Huberman Lab podcast</a> is worth a listen.</h6>`,
    privacy_notice: `We take your privacy seriously. Although we have blocked this website
    based on your instructions, we don't keep any record of your browsing
    history or which apps you use. The only things we track are: your
    habits, the focus modes you complete and other actions you take inside
    the Focus Bear app. Anything you do in other apps is confidential and
    we don't keep any records of it. Read more in
    <a href="https://www.focusbear.io/en/privacy-policy" target="_blank"
      >our privacy policy</a
    >`,
    privacy_button:
      "🙈 Privacy Alert: we don't track your browsing history. Learn More.",
    oops_i_actually_need_this: 'Oops I actually need this - unblock it for me',
    every_focus_session_you_complete_is_taking_you_towards_long_term_goals:
      'Every focus session you complete is taking you towards your long term goals',
    are_you_sure: 'Are you 100% sure?',
    yes_i_actually_need_it: 'Yes I actually need it',
    you_re_right_get_this_site_away_from_me:
      "Err..you're right - get this site away from me!",
    click_here_to_edit_your_long_term_goals:
      'Click here to edit your long term goals',
    focus_block_duration_subtitle: (duration) =>
      `You've been doing great - ${duration} already spent focused`,
    save_this_page_for_later: (hostname) => `Save ${hostname} for later`,
    focus_block_is_over: 'Focus block is over!',
    let_keep_the_focus_on: (focus_mode) =>
      `Let's keep the focus on ${focus_mode}`,
    get_a_tip_for_staying_focused: 'Get a tip for staying focused',
    original_url: (url) => `Original URL ${url}`,
    general_error:
      'Something went wrong. Very sorry. Please email support@focusbear.io and tell us what led to this error',
    intro_oops_i_actually_need_this:
      'Click here if you accidentally blocked the site and need access to it. This button will be accessible for the duration that the Cuddly Bear Mode is active.',
    intro_long_term_goals:
      "Put in your long term goals to remind yourself why you don't want to access distracting sites.",
    intro_save_url_later:
      'If you want to look at this page later during your relax time, click here to add it to your anti to-do list.',
    intro_original_url:
      'You can copy the URL from here if you need to save it somewhere else.',
    super_strict_focus_mode_cuddly_off_message: (remaining_minutes) =>
      `You can't unlock this site because you are in super strict blocking mode. Your focus session ends ${remaining_minutes}`,
    temporarily_allow_access_to_url: (url) =>
      `Temporarily allow access to <span class='url'>${url}<span>`,
    what_do_you_plan_to_achieve_here: 'What do you plan to achieve here?',
    how_much_time_do_you_need: 'How much time do you need?',
    unlock_for_minutes_minutes: (minutes) =>
      `Unlock for ${minutes} minute${minutes !== 1 ? 's' : ''}`,
    minutes: 'minutes',
    temporarily_allow_access: 'Temporarily allow access',
    block_access_i_dont_need_it: "Block access - I don't need it",
    focus_bear_ai_thinks: (domain) =>
      `Focus Bear's AI thinks ${domain} is distracting`,
    your_focus_intention_is_intention_and_domain_doesnt_seem_relevant: (
      domain
    ) =>
      `<span>${domain}</span> doesn't seem relevant. Are you sure you need it?`,
    this_is_a_super_distracting_site: 'This is a super distracting site.',
    you_re_currently_doing_your_routine_super_distracting_sites_are_blocked: (
      isMorningRoutine
    ) =>
      `You're currently doing your ${
        isMorningRoutine ? 'morning' : 'evening'
      } routine - super distracting sites are blocked`,
  },
  es: {
    blocked_because_you_are_doing_your_morning_routine:
      'Bloqueado porque estás haciendo tu rutina matutina',
    blocked_because_you_are_doing_your_evening_routine:
      'Bloqueado porque estás haciendo tu rutina nocturna',
    focus_block_inprogress_title: 'Buen trabajo',
    focus_block_inprogress_subtitle: (remainingTime, focusBlockCompleted) =>
      `te has concentrado durante ${remainingTime} ${
        focusBlockCompleted
          ? `y ya has completado ${focusBlockCompleted} sesiones de enfoque.`
          : ''
      }`,
    focus_block_inprogress_additionalInfo: (remainingTime) =>
      `Solo ${remainingTime} para el final de tu sesión de enfoque.`,
    focus_block_over_title: '¡Felicidades por terminar tu sesión de enfoque!',
    focus_block_over_subtitle: (focusBlockCompleted, totalFocusBlocked) =>
      `${
        focusBlockCompleted
          ? `Has completado ${focusBlockCompleted} sesiones de enfoque hoy para `
          : ''
      } ${
        totalFocusBlocked
          ? `un gran total de ${totalFocusBlocked} tiempo de enfoque.`
          : ''
      }`,
    focus_block_over_additionalInfo:
      'Sigue así y avanzarás rápidamente hacia tus objetivos a largo plazo.',
    this_site_is_always_blocked: 'Este sitio está siempre bloqueado',
    this_site_is_set_as_super_distracting_instructions: `NEEDSTRANSLATION <div class="supper-distraction-wrapper"><p>This site is set as super distracting</p> <a href="https://support.focusbear.io/portal/en/kb/articles/setting-up-always-blocked-sites-and-apps-in-focus-bear" target="_blank">Click here for instructions on unblocking it.</a></div>`,
    click_here_to_re_open_the_original_url: (url) =>
      `Haz clic aquí para volver a abrir la URL original ${url ?? ''}`,
    is_this_sub_reddit_actually_productive:
      '¿Es este subreddit realmente productivo? Si es así, puedes añadirlo a la lista de permitidos de tu Modo de Enfoque pero seguir bloqueando el resto de Reddit.',
    is_this_video_actually_productive:
      '¿Este vídeo es realmente productivo? Si es así, puedes añadirlo a la lista de permitidos de tu Modo de Enfoque pero bloquear el resto de Youtube.',
    focus_tip: (
      focus_mode,
      old_url
    ) => ` <h6>¿Quieres reprogramar tu cerebro para mantenerte concentrado durante los bloques de enfoque?
    <a href="https://journals.sagepub.com/doi/abs/10.1177/1539449219876877?journalCode=otjb&">Estudios para romper los malos hábitos</a> indican que si realizas una acción positiva inmediatamente después de hacer un mal hábito, empezarás a interrumpir los desencadenantes neuronales del mal hábito. Por ejemplo, acabas de abrir ${old_url} cuando tenías la intención de concentrarte${
      focus_mode ? ` en ${focus_mode}` : ``
    }. Intenta respirar profundamente durante 5 segundos, levántate y estírate o ve por un vaso de agua. <a href="https://journals.sagepub.com/doi/full/10.1177/1539449219876877">El estudio de Fritz et al.</a> indica que este enfoque funciona mucho mejor que castigarse a uno mismo (no hace falta darse una descarga eléctrica leve por ser tan travieso). Si quieres una introducción a la ciencia de la formación de hábitos, <a href="https://hubermanlab.com/the-science-of-making-and-breaking-habits/">el episodio 53 del podcast del Laboratorio Huberman</a> merece ser escuchado.</h6>`,
    privacy_notice: `Nos tomamos muy en serio tu privacidad. Aunque hemos bloqueado este sitio web
  siguiendo tus instrucciones, no guardamos ningún registro de tu historial de
  busquedas ni de las aplicaciones que utilizas. Lo único que rastreamos es: tus
  hábitos, los modos de enfoque que completas y otras acciones que realizas
  dentro de Focus Bear. Todo lo que hagas en otras aplicaciones es confidencial y
  no guardamos ningún registro de ello. Más información en
  <a href="https://www.focusbear.io/en/privacy-policy" target="_blank"
    >nuestra política de privacidad</a
  >`,
    privacy_button:
      '🙈 Alerta de privacidad: no rastreamos tu historial de navegación. Más información.',
    oops_i_actually_need_this:
      'Oops en realidad necesito esto - desbloquearlo para mí',
    every_focus_session_you_complete_is_taking_you_towards_long_term_goals:
      'Cada sesión de enfoque que completas te acerca a tus objetivos a largo plazo',
    are_you_sure: '¿Estás 100% seguro?',
    yes_i_actually_need_it: 'Sí, realmente lo necesito',
    you_re_right_get_this_site_away_from_me:
      'Err... tienes razón - ¡aleja este sitio de mí!',
    click_here_to_edit_your_long_term_goals:
      'Haz clic aquí para editar tus objetivos a largo plazo',
    focus_block_duration_subtitle: (duration) =>
      `NEEDSTRANSLATION You've been doing great - ${duration} already spent focused`,
    save_this_page_for_later: (hostname) =>
      `NEEDSTRANSLATION Save ${hostname} for later`,
    focus_block_is_over: 'NEEDSTRANSLATION Focus block is over!',
    let_keep_the_focus_on: (focus_mode) =>
      `NEEDSTRANSLATION Let's keep the focus on ${focus_mode}`,
    get_a_tip_for_staying_focused:
      'NEEDSTRANSLATION Get a tip for staying focused',
    original_url: (url) => `NEEDSTRANSLATION Original URL ${url}`,
    general_error:
      'NEEDSTRANSLATION Something went wrong. Very sorry. Please email support@focusbear.io and tell us what led to this error',
    intro_oops_i_actually_need_this:
      'NEEDSTRANSLATION Click here if you accidentally blocked the site and need access to it. This button will be accessible for the duration that the Cuddly Bear Mode is active.',
    intro_long_term_goals:
      "NEEDSTRANSLATION Put in your long term goals to remind yourself why you don't want to access distracting sites.",
    intro_save_url_later:
      'NEEDSTRANSLATION If you want to look at this page later during your relax time, click here to add it to your anti to-do list.',
    intro_original_url:
      'NEEDSTRANSLATION You can copy the URL from here if you need to save it somewhere else.',
    super_strict_focus_mode_cuddly_off_message: (remaining_minutes) =>
      `NEEDSTRANSLATION You can't unlock this site because you are in super strict blocking mode. Your focus session ends ${remaining_minutes}`,
    temporarily_allow_access_to_url: (url) =>
      `NEEDSTRANSLATION Temporarily allow access to <span class='url'>${url}<span>`,
    what_do_you_plan_to_achieve_here:
      'NEEDSTRANSLATION What do you plan to achieve here?',
    how_much_time_do_you_need: 'NEEDSTRANSLATION How much time do you need?',
    unlock_for_minutes_minutes: (minutes) =>
      `NEEDSTRANSLATION Unlock for ${minutes} minute${
        minutes !== 1 ? 's' : ''
      }`,
    minutes: 'NEEDSTRANSLATION minutes',
    temporarily_allow_access: 'NEEDSTRANSLATION Temporarily allow access',
    block_access_i_dont_need_it:
      "NEEDSTRANSLATION Block access - I don't need it",
    focus_bear_ai_thinks: (domain) =>
      `NEEDSTRANSLATION Focus Bear's AI thinks ${domain} is distracting`,
    your_focus_intention_is_intention_and_domain_doesnt_seem_relevant: (
      domain
    ) =>
      `NEEDSTRANSLATION <span>${domain}</span> doesn't seem relevant. Are you sure you need it?`,
    this_is_a_super_distracting_site:
      'NEEDSTRANSLATION This is a super distracting site.',
    you_re_currently_doing_your_routine_super_distracting_sites_are_blocked: (
      isMorningRoutine
    ) =>
      `NEEDSTRANSLATION You're currently doing your ${
        isMorningRoutine ? 'morning' : 'evening'
      } routine - super distracting sites are blocked`,
  },
};
