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
    do_you_need_to_user_url_when_you_are_focusing: (
      url,
      intention
    ) => `Do you need to use <span class="website">${url}</span> when
            you're focusing on <span class="intention">${intention}</span>?`,
    yor_intention_was_intention: (intention) =>
      `Yor intention was "${intention}"`,
    ai_relevance_score_for_this_site: (score) =>
      `AI relevance score for this site: <div class="score-bar"><div class="score-fill" style="width: ${score}%"></div></div>${score}%`,
    convince_the_ai_why_its_necessary: "Convince the AI why it's necessary",
    give_more_info_to_the_ai_to_explain_why_you_need_to_use_this_site:
      'Give more info to the AI to explain why you need to use this site',
    explain_why_you_need_this_site_for_intention: (intention) =>
      `Explain why you need this site for ${intention}...`,
    ai_still_thinks_this_site_is_distracting:
      'AI still thinks this site is distracting',
    ai_relevance_score_for_this_site_score: (score) =>
      `AI relevance score for this site: ${score}%`,
    focus_bears_ai_still_thinks_url_isn_t_relevant: (url) =>
      `Focus bears ai still thinks ${url} isn't relevant for what you're trying to achieve. Are your sure you need it?`,
    what_do_you_want_to_achieve_during_your_time_here:
      'What do you want to achieve during your time here?',
    your_intention: 'Your intention...',
    select_minutes_to_use_this_site: 'Select minutes to use this site?',
    yes: 'Yes',
    no_i_was_getting_distracted: 'No - I was getting distracted',
    convince_the_ai: 'Convince the AI',
    cancel: 'Cancel',
    set_intention: 'Set Intention',
    no: 'No',
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
      `¡Vas muy bien! Ya llevas ${duration} concentrad@`,
    save_this_page_for_later: (hostname) =>
      `Guardar ${hostname} para más tarde`,
    focus_block_is_over: '¡Se terminó el bloque de enfoque!',
    let_keep_the_focus_on: (focus_mode) =>
      `Sigamos concentrad@s en ${focus_mode}`,
    get_a_tip_for_staying_focused:
      'Recibe un consejo para mantener la concentración',
    original_url: (url) => `URL original: ${url}`,
    general_error:
      'Algo salió mal. Lo sentimos mucho. Por favor, envía un correo a support@focusbear.io y cuéntanos qué ocurrió.',
    intro_oops_i_actually_need_this:
      'Haz clic aquí si bloqueaste este sitio por error y necesitas acceder. Este botón estará disponible mientras esté activo el Modo Osito Cariñoso.',
    intro_long_term_goals:
      'Escribe tus metas a largo plazo para recordarte por qué no quieres entrar a sitios que distraen.',
    intro_save_url_later:
      '¿Quieres ver esta página más tarde durante tu tiempo de descanso? Haz clic aquí para guardarla en tu lista anti-pendientes.',
    intro_original_url:
      'Puedes copiar la URL desde aquí si necesitas guardarla en otro lugar.',
    super_strict_focus_mode_cuddly_off_message: (remaining_minutes) =>
      `No puedes desbloquear este sitio porque estás en modo de bloqueo súper estricto. Tu sesión de enfoque termina en ${remaining_minutes}`,
    temporarily_allow_access_to_url: (url) =>
      `Permitir acceso temporal a <span class='url'>${url}<span>`,
    what_do_you_plan_to_achieve_here: '¿Qué planeas lograr aquí?',
    how_much_time_do_you_need: '¿Cuánto tiempo necesitas?',
    unlock_for_minutes_minutes: (minutes) =>
      `Desbloquear por ${minutes} minuto${minutes !== 1 ? 's' : ''}`,
    minutes: 'minutos',
    temporarily_allow_access: 'Permitir acceso temporal',
    block_access_i_dont_need_it: 'Bloquear acceso - no lo necesito',
    focus_bear_ai_thinks: (domain) =>
      `La IA de Focus Bear cree que ${domain} es una distracción`,
    your_focus_intention_is_intention_and_domain_doesnt_seem_relevant: (
      domain
    ) =>
      `<span>${domain}</span> no parece relevante. ¿Estás segur@ de que lo necesitas?`,
    this_is_a_super_distracting_site: 'Este sitio distrae muchísimo.',
    you_re_currently_doing_your_routine_super_distracting_sites_are_blocked: (
      isMorningRoutine
    ) =>
      `Estás haciendo tu rutina de ${
        isMorningRoutine ? 'mañana' : 'noche'
      } - los sitios súper distractores están bloqueados`,
    do_you_need_to_user_url_when_you_are_focusing: (url, intention) =>
      `¿Necesitas usar <span class="website">${url}</span> mientras te concentras en <span class="intention">${intention}</span>?`,
    yor_intention_was_intention: (intention) =>
      `Tu intención era "${intention}"`,
    ai_relevance_score_for_this_site: (score) =>
      `Nivel de relevancia según la IA para este sitio: <div class="score-bar"><div class="score-fill" style="width: ${score}%"></div></div>${score}%`,
    convince_the_ai_why_its_necessary:
      'Convencé a la IA de por qué es necesario',
    give_more_info_to_the_ai_to_explain_why_you_need_to_use_this_site:
      'Dale más información a la IA para explicar por qué necesitas usar este sitio',
    explain_why_you_need_this_site_for_intention: (intention) =>
      `Explica por qué necesitas este sitio para ${intention}...`,
    ai_still_thinks_this_site_is_distracting:
      'La IA sigue pensando que este sitio distrae',
    ai_relevance_score_for_this_site_score: (score) =>
      `Relevancia según la IA para este sitio: ${score}%`,
    focus_bears_ai_still_thinks_url_isn_t_relevant: (url) =>
      `Focus Bears todavía cree que ${url} no es relevante para lo que querés lograr. ¿Estás segur@ de que lo necesitás?`,
    what_do_you_want_to_achieve_during_your_time_here:
      '¿Qué querés lograr durante tu tiempo acá?',
    your_intention: 'Tu intención...',
    select_minutes_to_use_this_site: '¿Cuántos minutos querés usar este sitio?',
    yes: 'Sí',
    no_i_was_getting_distracted: 'No, me estaba distrayendo',
    convince_the_ai: 'Convencela',
    cancel: 'Cancelar',
    set_intention: 'Definir intención',
    no: 'No',
  },
};
