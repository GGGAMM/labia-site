(function () {
  var STORAGE_KEY = "labia-lang";
  var SUPPORTED = { es: true, en: true, pt: true };
  var APPLE = {
    es: "https://apps.apple.com/es/app/lab-ia/id6755089051",
    en: "https://apps.apple.com/app/lab-ia/id6755089051",
    pt: "https://apps.apple.com/br/app/lab-ia/id6755089051"
  };
  var TIKTOK = {
    es: "https://www.tiktok.com/@usalab.ia?lang=es",
    en: "https://www.tiktok.com/@usalab.ia?lang=en",
    pt: "https://www.tiktok.com/@usalab.ia?lang=pt-BR"
  };
  var BADGES = {
    apple: {
      es: "images/badges/apple-es.svg",
      en: "images/badges/apple-en.svg",
      pt: "images/badges/apple-pt.svg"
    },
    play: {
      es: "images/badges/play-es.png",
      en: "images/badges/play-en.png",
      pt: "images/badges/play-pt.png"
    }
  };

  var strings = {
    es: {
      "meta.home": "Lab.IA — Frases para ligar",
      "meta.terms": "Términos de Uso - Lab.IA",
      "meta.privacy": "Política de Privacidad - Lab.IA",
      "meta.delete": "Eliminar Cuenta - Lab.IA",
      "nav.terms": "Términos",
      "nav.privacy": "Privacidad",
      "nav.contact": "Contacto",
      "nav.open": "Abrir menú",
      "nav.close": "Cerrar menú",
      "lang.label": "Idioma",
      "hero.eyebrow": "FRASES PARA LIGAR",
      "hero.title": "Lleva tus conversaciones al siguiente nivel",
      "hero.lede": "Tu asistente de flirteo. Genera respuestas con el tono justo: de suave a picante, sin perder tu voz.",
      "store.app": "Consíguelo en el App Store",
      "store.play": "Consíguelo en Google Play",
      "phone.label": "Capturas de Lab.IA",
      "phone.role": "carrusel",
      "shot.1": "Pantalla de inicio de Lab.IA",
      "shot.2": "Generador de frases de Lab.IA",
      "shot.3": "Selección de país en Lab.IA",
      "shot.4": "Sube un pantallazo en Lab.IA",
      "shot.5": "Respuesta sugerida en Lab.IA",
      "modes.title": "Elige el nivel de picante",
      "modes.sub": "Cinco modos reales de la app. Tú decides cuánto calor lleva cada respuesta.",
      "mode.softest": "Muy suave",
      "mode.softestBody": "Amable, sin presión. Ideal para romper el hielo.",
      "mode.soft": "Suave",
      "mode.softBody": "Cercano y ligero, con un toque de interés.",
      "mode.mid": "Medio",
      "mode.midBody": "Flirteo claro, natural y con personalidad.",
      "mode.hot": "Picante",
      "mode.hotBody": "Directo y atrevido, sin pasarte de la raya.",
      "mode.hottest": "Muy picante",
      "mode.hottestBody": "Máxima intensidad. Para cuando ya hay química.",
      "faq.title": "Preguntas frecuentes",
      "faq.sub": "Lo esencial para empezar a usarla con confianza.",
      "faq.q1": "¿Cómo genera las respuestas?",
      "faq.a1": "Sube una captura de la conversación y Lab.IA te propone respuestas con el nivel de picante que elijas. Tú copias, editas y envías.",
      "faq.q2": "¿Sirve solo para ligar?",
      "faq.a2": "Está pensada para flirteo y citas, pero también ayuda en chats donde quieres sonar más ingenioso, cercano o seguro.",
      "faq.q3": "¿Se nota que es una app?",
      "faq.a3": "Las sugerencias buscan tu tono, no un texto genérico. Ajusta el picante y edita lo que no suene a ti antes de enviar.",
      "faq.q4": "¿Qué es el nivel de picante?",
      "faq.a4": "Es el control de intensidad: de muy suave a muy picante. Así la respuesta encaja con el momento de la conversación.",
      "faq.q5": "¿Qué pasa con mi privacidad?",
      "faq.a5": "Usa la app para generar frases, no para publicar tus chats. Si tienes dudas, escríbenos a <a href=\"mailto:main@usalabia.com\">main@usalabia.com</a> o revisa la <a href=\"politica-de-privacidad.html\">política de privacidad</a>.",
      "cta.title": "Empieza a ligar mejor hoy",
      "cta.sub": "Descarga Lab.IA en iOS o Android y prueba tu primer mensaje.",
      "footer.privacy": "Privacidad",
      "footer.terms": "Términos",
      "footer.delete": "Eliminar cuenta",
      "footer.contact": "Contacto",
      "footer.copy": "Propiedad y operado por GGGAM Enterprises LLC",
      "delete.h1": "Eliminar Cuenta y Datos",
      "delete.updated": "Última actualización: 14 de julio de 2025",
      "delete.h2request": "Solicitud de Eliminación de Cuenta",
      "delete.p1": "Si deseas eliminar tu cuenta de Lab.IA y todos los datos asociados, puedes hacerlo siguiendo estos pasos:",
      "delete.h3steps": "Pasos para Eliminar tu Cuenta:",
      "delete.step1": "<strong>Envía un correo electrónico</strong> a <a href=\"mailto:main@usalabia.com\">main@usalabia.com</a> con el asunto \"Solicitud de Eliminación de Cuenta\"",
      "delete.step2": "<strong>Incluye la siguiente información</strong> en tu solicitud:",
      "delete.liEmail": "Tu dirección de correo electrónico asociada a la cuenta",
      "delete.liUser": "Tu nombre de usuario (si aplica)",
      "delete.liConfirm": "Una confirmación de que deseas eliminar permanentemente tu cuenta y todos los datos asociados",
      "delete.step3": "<strong>Espera nuestra confirmación</strong> - Procesaremos tu solicitud dentro de 30 días hábiles",
      "delete.h2removed": "Datos que se Eliminarán",
      "delete.pRemoved": "Al eliminar tu cuenta, se eliminarán permanentemente los siguientes datos:",
      "delete.liProfile": "Información de perfil de usuario (nombre, correo electrónico, nombre de usuario)",
      "delete.liHistory": "Historial de uso de la aplicación",
      "delete.liPrefs": "Preferencias y configuraciones de la cuenta",
      "delete.liContent": "Cualquier contenido generado o guardado dentro de la aplicación",
      "delete.liAuth": "Datos de autenticación y sesiones",
      "delete.h2kept": "Datos que se Pueden Retener",
      "delete.pKept": "Por razones legales y operativas, podemos retener cierta información por períodos específicos:",
      "delete.liTx": "<strong>Información de transacciones:</strong> Se puede retener información relacionada con compras o suscripciones durante el período requerido por ley (generalmente 7 años para fines fiscales y contables)",
      "delete.liSecurity": "<strong>Registros de seguridad:</strong> Podemos mantener registros de actividades sospechosas o fraudulentas para proteger nuestros servicios y otros usuarios",
      "delete.liAnon": "<strong>Datos anonimizados:</strong> Podemos conservar datos agregados y anonimizados que no identifiquen personalmente a ningún usuario",
      "delete.h2period": "Período de Retención",
      "delete.pPeriod": "Después de recibir tu solicitud de eliminación:",
      "delete.li30": "Procesaremos la eliminación de tu cuenta y datos personales dentro de <strong>30 días hábiles</strong>",
      "delete.liLegal": "Los datos que debemos retener por razones legales se conservarán según lo requiera la ley aplicable",
      "delete.liGone": "Una vez eliminados, los datos no se pueden recuperar",
      "delete.h2more": "Información Adicional",
      "delete.pMore": "Si tienes preguntas sobre el proceso de eliminación de cuenta o sobre qué datos se eliminarán o retendrán, puedes contactarnos en:",
      "delete.email": "Email:",
      "delete.address": "Dirección:",
      "delete.warn": "<strong>⚠️ Importante:</strong> La eliminación de tu cuenta es permanente e irreversible. Asegúrate de que realmente deseas eliminar tu cuenta antes de enviar la solicitud.",
      "delete.cta": "Solicitar Eliminación de Cuenta",
      "delete.mailSubject": "Solicitud de Eliminación de Cuenta"
    },
    en: {
      "meta.home": "Lab.IA — Lines to flirt",
      "meta.terms": "Terms of Use - Lab.IA",
      "meta.privacy": "Privacy Policy - Lab.IA",
      "meta.delete": "Delete Account - Lab.IA",
      "nav.terms": "Terms",
      "nav.privacy": "Privacy",
      "nav.contact": "Contact",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "lang.label": "Language",
      "hero.eyebrow": "LINES TO FLIRT",
      "hero.title": "Take your conversations to the next level",
      "hero.lede": "Your flirting assistant. Generate replies with the right heat: from soft to spicy, without losing your voice.",
      "store.app": "Download on the App Store",
      "store.play": "Get it on Google Play",
      "phone.label": "Lab.IA screenshots",
      "phone.role": "carousel",
      "shot.1": "Lab.IA home screen",
      "shot.2": "Lab.IA line generator",
      "shot.3": "Country picker in Lab.IA",
      "shot.4": "Upload a screenshot in Lab.IA",
      "shot.5": "Suggested reply in Lab.IA",
      "modes.title": "Pick the heat level",
      "modes.sub": "Five real in-app modes. You decide how hot each reply should be.",
      "mode.softest": "Very soft",
      "mode.softestBody": "Kind, no pressure. Perfect for breaking the ice.",
      "mode.soft": "Soft",
      "mode.softBody": "Warm and light, with a hint of interest.",
      "mode.mid": "Medium",
      "mode.midBody": "Clear, natural flirting with personality.",
      "mode.hot": "Spicy",
      "mode.hotBody": "Direct and bold, without going too far.",
      "mode.hottest": "Extra spicy",
      "mode.hottestBody": "Maximum heat. For when the chemistry is already there.",
      "faq.title": "Frequently asked questions",
      "faq.sub": "The essentials so you can start with confidence.",
      "faq.q1": "How does it generate replies?",
      "faq.a1": "Upload a screenshot of the chat and Lab.IA suggests replies at the heat level you pick. You copy, edit, and send.",
      "faq.q2": "Is it only for dating?",
      "faq.a2": "It's built for flirting and dates, but it also helps in chats where you want to sound wittier, closer, or more confident.",
      "faq.q3": "Will it sound like an app?",
      "faq.a3": "Suggestions aim for your tone, not generic copy. Dial the heat and edit anything that doesn't sound like you before you send.",
      "faq.q4": "What is the heat level?",
      "faq.a4": "It's the intensity control: from very soft to extra spicy, so the reply fits the moment.",
      "faq.q5": "What about my privacy?",
      "faq.a5": "Use the app to generate lines, not to publish your chats. Questions? Email <a href=\"mailto:main@usalabia.com\">main@usalabia.com</a> or read the <a href=\"politica-de-privacidad.html\">privacy policy</a>.",
      "cta.title": "Start flirting better today",
      "cta.sub": "Download Lab.IA on iOS or Android and try your first message.",
      "footer.privacy": "Privacy",
      "footer.terms": "Terms",
      "footer.delete": "Delete account",
      "footer.contact": "Contact",
      "footer.copy": "Owned and operated by GGGAM Enterprises LLC",
      "delete.h1": "Delete Account and Data",
      "delete.updated": "Last updated: July 14, 2025",
      "delete.h2request": "Account Deletion Request",
      "delete.p1": "If you want to delete your Lab.IA account and all associated data, follow these steps:",
      "delete.h3steps": "How to delete your account:",
      "delete.step1": "<strong>Send an email</strong> to <a href=\"mailto:main@usalabia.com\">main@usalabia.com</a> with the subject \"Account Deletion Request\"",
      "delete.step2": "<strong>Include the following</strong> in your request:",
      "delete.liEmail": "The email address linked to the account",
      "delete.liUser": "Your username (if applicable)",
      "delete.liConfirm": "Confirmation that you want to permanently delete your account and all associated data",
      "delete.step3": "<strong>Wait for our confirmation</strong> — we will process your request within 30 business days",
      "delete.h2removed": "Data we will delete",
      "delete.pRemoved": "When you delete your account, the following data is permanently removed:",
      "delete.liProfile": "Profile information (name, email, username)",
      "delete.liHistory": "App usage history",
      "delete.liPrefs": "Account preferences and settings",
      "delete.liContent": "Any content generated or saved in the app",
      "delete.liAuth": "Authentication data and sessions",
      "delete.h2kept": "Data we may retain",
      "delete.pKept": "For legal and operational reasons, we may keep some information for specific periods:",
      "delete.liTx": "<strong>Transaction information:</strong> Purchase or subscription records may be kept for the period required by law (usually 7 years for tax and accounting)",
      "delete.liSecurity": "<strong>Security logs:</strong> We may keep records of suspicious or fraudulent activity to protect our services and other users",
      "delete.liAnon": "<strong>Anonymized data:</strong> We may keep aggregated, anonymized data that does not identify any user",
      "delete.h2period": "Retention period",
      "delete.pPeriod": "After we receive your deletion request:",
      "delete.li30": "We will delete your account and personal data within <strong>30 business days</strong>",
      "delete.liLegal": "Data we must keep for legal reasons will be retained as required by applicable law",
      "delete.liGone": "Once deleted, the data cannot be recovered",
      "delete.h2more": "More information",
      "delete.pMore": "If you have questions about the deletion process or which data is removed or retained, contact us at:",
      "delete.email": "Email:",
      "delete.address": "Address:",
      "delete.warn": "<strong>⚠️ Important:</strong> Account deletion is permanent and irreversible. Make sure you really want to delete your account before you send the request.",
      "delete.cta": "Request account deletion",
      "delete.mailSubject": "Account Deletion Request"
    },
    pt: {
      "meta.home": "Lab.IA — Cantadas",
      "meta.terms": "Termos de Uso - Lab.IA",
      "meta.privacy": "Política de Privacidade - Lab.IA",
      "meta.delete": "Excluir Conta - Lab.IA",
      "nav.terms": "Termos",
      "nav.privacy": "Privacidade",
      "nav.contact": "Contato",
      "nav.open": "Abrir menu",
      "nav.close": "Fechar menu",
      "lang.label": "Idioma",
      "hero.eyebrow": "CANTADAS",
      "hero.title": "Leve suas conversas para o próximo nível",
      "hero.lede": "Seu assistente de flerte. Gere respostas no tom certo: do suave ao picante, sem perder a sua voz.",
      "store.app": "Baixar na App Store",
      "store.play": "Disponível no Google Play",
      "phone.label": "Capturas do Lab.IA",
      "phone.role": "carrossel",
      "shot.1": "Tela inicial do Lab.IA",
      "shot.2": "Gerador de frases do Lab.IA",
      "shot.3": "Seleção de país no Lab.IA",
      "shot.4": "Envie um print no Lab.IA",
      "shot.5": "Resposta sugerida no Lab.IA",
      "modes.title": "Escolha o nível de picante",
      "modes.sub": "Cinco modos reais do app. Você decide quanto calor cada resposta leva.",
      "mode.softest": "Muito suave",
      "mode.softestBody": "Gentil, sem pressão. Ideal para quebrar o gelo.",
      "mode.soft": "Suave",
      "mode.softBody": "Próximo e leve, com um toque de interesse.",
      "mode.mid": "Médio",
      "mode.midBody": "Flerte claro, natural e com personalidade.",
      "mode.hot": "Picante",
      "mode.hotBody": "Direto e ousado, sem passar do ponto.",
      "mode.hottest": "Muito picante",
      "mode.hottestBody": "Intensidade máxima. Para quando já tem química.",
      "faq.title": "Perguntas frequentes",
      "faq.sub": "O essencial para começar a usar com confiança.",
      "faq.q1": "Como gera as respostas?",
      "faq.a1": "Envie um print da conversa e o Lab.IA sugere respostas no nível de picante que você escolher. Você copia, edita e envia.",
      "faq.q2": "Serve só para flertar?",
      "faq.a2": "Foi feito para flerte e encontros, mas também ajuda em chats em que você quer soar mais criativo, próximo ou seguro.",
      "faq.q3": "Dá para perceber que é um app?",
      "faq.a3": "As sugestões buscam o seu tom, não um texto genérico. Ajuste o picante e edite o que não soar como você antes de enviar.",
      "faq.q4": "O que é o nível de picante?",
      "faq.a4": "É o controle de intensidade: de muito suave a muito picante, para a resposta combinar com o momento da conversa.",
      "faq.q5": "E a minha privacidade?",
      "faq.a5": "Use o app para gerar frases, não para publicar seus chats. Dúvidas? Escreva para <a href=\"mailto:main@usalabia.com\">main@usalabia.com</a> ou veja a <a href=\"politica-de-privacidad.html\">política de privacidade</a>.",
      "cta.title": "Comece a flertar melhor hoje",
      "cta.sub": "Baixe o Lab.IA no iOS ou Android e teste sua primeira mensagem.",
      "footer.privacy": "Privacidade",
      "footer.terms": "Termos",
      "footer.delete": "Excluir conta",
      "footer.contact": "Contato",
      "footer.copy": "Propriedade e operação de GGGAM Enterprises LLC",
      "delete.h1": "Excluir Conta e Dados",
      "delete.updated": "Última atualização: 14 de julho de 2025",
      "delete.h2request": "Pedido de exclusão de conta",
      "delete.p1": "Se quiser excluir sua conta do Lab.IA e todos os dados associados, siga estes passos:",
      "delete.h3steps": "Como excluir sua conta:",
      "delete.step1": "<strong>Envie um e-mail</strong> para <a href=\"mailto:main@usalabia.com\">main@usalabia.com</a> com o assunto \"Pedido de exclusão de conta\"",
      "delete.step2": "<strong>Inclua as seguintes informações</strong> no pedido:",
      "delete.liEmail": "O e-mail associado à conta",
      "delete.liUser": "Seu nome de usuário (se houver)",
      "delete.liConfirm": "Uma confirmação de que você deseja excluir permanentemente a conta e todos os dados associados",
      "delete.step3": "<strong>Aguarde nossa confirmação</strong> — processaremos o pedido em até 30 dias úteis",
      "delete.h2removed": "Dados que serão excluídos",
      "delete.pRemoved": "Ao excluir a conta, os seguintes dados são removidos de forma permanente:",
      "delete.liProfile": "Informações de perfil (nome, e-mail, nome de usuário)",
      "delete.liHistory": "Histórico de uso do aplicativo",
      "delete.liPrefs": "Preferências e configurações da conta",
      "delete.liContent": "Qualquer conteúdo gerado ou salvo no aplicativo",
      "delete.liAuth": "Dados de autenticação e sessões",
      "delete.h2kept": "Dados que podem ser retidos",
      "delete.pKept": "Por razões legais e operacionais, podemos manter certas informações por períodos específicos:",
      "delete.liTx": "<strong>Informações de transação:</strong> Dados de compras ou assinaturas podem ser retidos pelo período exigido por lei (geralmente 7 anos para fins fiscais e contábeis)",
      "delete.liSecurity": "<strong>Registros de segurança:</strong> Podemos manter registros de atividades suspeitas ou fraudulentas para proteger nossos serviços e outros usuários",
      "delete.liAnon": "<strong>Dados anonimizados:</strong> Podemos conservar dados agregados e anonimizados que não identifiquem nenhum usuário",
      "delete.h2period": "Período de retenção",
      "delete.pPeriod": "Depois de recebermos o pedido de exclusão:",
      "delete.li30": "Excluiremos sua conta e dados pessoais em até <strong>30 dias úteis</strong>",
      "delete.liLegal": "Os dados que precisamos reter por razões legais serão conservados conforme a lei aplicável",
      "delete.liGone": "Depois de excluídos, os dados não podem ser recuperados",
      "delete.h2more": "Informações adicionais",
      "delete.pMore": "Se tiver dúvidas sobre o processo de exclusão ou sobre quais dados serão removidos ou retidos, fale conosco em:",
      "delete.email": "E-mail:",
      "delete.address": "Endereço:",
      "delete.warn": "<strong>⚠️ Importante:</strong> A exclusão da conta é permanente e irreversível. Tenha certeza de que realmente deseja excluir a conta antes de enviar o pedido.",
      "delete.cta": "Solicitar exclusão da conta",
      "delete.mailSubject": "Pedido de exclusão de conta"
    }
  };

  function normalize(code) {
    var value = (code || "").toLowerCase();
    if (value.indexOf("pt") === 0) return "pt";
    if (value.indexOf("es") === 0) return "es";
    if (value.indexOf("en") === 0) return "en";
    return "";
  }

  function detect() {
    try {
      var params = new URLSearchParams(window.location.search);
      var fromQuery = normalize(params.get("lang"));
      if (SUPPORTED[fromQuery]) return fromQuery;
    } catch (e) {}

    try {
      var stored = normalize(window.localStorage.getItem(STORAGE_KEY));
      if (SUPPORTED[stored]) return stored;
    } catch (e2) {}

    var list = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage];
    for (var i = 0; i < list.length; i++) {
      var match = normalize(list[i]);
      if (SUPPORTED[match]) return match;
    }
    return "es";
  }

  function t(lang, key) {
    return (strings[lang] && strings[lang][key]) || strings.es[key] || "";
  }

  function setText(el, value) {
    el.textContent = value;
  }

  function applyAttributes(el, lang) {
    var spec = el.getAttribute("data-i18n-attr");
    if (!spec) return;
    spec.split(",").forEach(function (part) {
      var bits = part.split(":");
      if (bits.length < 2) return;
      el.setAttribute(bits[0].trim(), t(lang, bits[1].trim()));
    });
  }

  function setScreenshots(lang) {
    document.querySelectorAll("[data-screenshot]").forEach(function (img) {
      var n = img.getAttribute("data-screenshot");
      var fallback = "images/screenshots/" + n + ".jpg";
      var localized = "images/screenshots/" + lang + "/" + n + ".jpg";
      if (lang === "es") {
        img.src = fallback;
        return;
      }
      var probe = new Image();
      probe.onload = function () {
        img.src = localized;
      };
      probe.onerror = function () {
        img.src = fallback;
      };
      probe.src = localized;
    });
  }

  function apply(lang) {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    document.documentElement.setAttribute("data-lang", lang);

    var page = document.documentElement.getAttribute("data-page") || "home";
    document.title = t(lang, "meta." + page);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      setText(el, t(lang, el.getAttribute("data-i18n")));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(lang, el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      applyAttributes(el, lang);
    });
    document.querySelectorAll("[data-store=apple]").forEach(function (el) {
      el.href = APPLE[lang] || APPLE.es;
    });
    document.querySelectorAll("[data-badge]").forEach(function (img) {
      var kind = img.getAttribute("data-badge");
      if (BADGES[kind] && BADGES[kind][lang]) img.src = BADGES[kind][lang];
    });
    document.querySelectorAll("[data-social='tiktok']").forEach(function (el) {
      el.href = TIKTOK[lang] || TIKTOK.es;
    });
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var active = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    var mailCta = document.querySelector("[data-delete-mail]");
    if (mailCta) {
      mailCta.href = "mailto:main@usalabia.com?subject=" + encodeURIComponent(t(lang, "delete.mailSubject"));
    }

    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".nav-toggle");
    if (header && toggle) {
      var open = header.classList.contains("is-open");
      toggle.setAttribute("aria-label", t(lang, open ? "nav.close" : "nav.open"));
    }

    setScreenshots(lang);
  }

  function setLang(lang) {
    if (!SUPPORTED[lang]) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url);
    } catch (e2) {}
    apply(lang);
  }

  var current = detect();
  try {
    window.localStorage.setItem(STORAGE_KEY, current);
  } catch (e3) {}

  window.LabIA = {
    lang: function () {
      return current;
    },
    t: function (key) {
      return t(current, key);
    },
    setLang: function (lang) {
      current = lang;
      setLang(lang);
    }
  };

  apply(current);

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.LabIA.setLang(btn.getAttribute("data-set-lang"));
    });
  });
})();
