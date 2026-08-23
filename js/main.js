(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (header && toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", window.LabIA ? window.LabIA.t(open ? "nav.close" : "nav.open") : (open ? "Cerrar menú" : "Abrir menú"));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", window.LabIA ? window.LabIA.t("nav.open") : "Abrir menú");
      }
    });
  }

  var modes = document.querySelectorAll(".mode");
  modes.forEach(function (chip) {
    chip.addEventListener("click", function () {
      modes.forEach(function (item) {
        item.classList.remove("is-active");
      });
      chip.classList.add("is-active");
    });
  });

  var phone = document.querySelector(".phone");
  var track = document.querySelector(".phone-track");
  if (phone && track) {
    var slides = track.querySelectorAll(".phone-slide");
    var count = slides.length;
    var index = 0;
    var timer;
    if (count > 1) {
      track.appendChild(slides[0].cloneNode(true));

      function goTo(next) {
        index = next;
        track.style.transform = "translateY(-" + index * 100 + "%)";
      }

      function snapToStart() {
        track.classList.add("is-jumping");
        goTo(0);
        track.offsetHeight;
        track.classList.remove("is-jumping");
      }

      function advance() {
        goTo(index + 1);
        if (index >= count) {
          window.setTimeout(snapToStart, 760);
        }
      }

      function start() {
        stop();
        timer = window.setInterval(advance, 3200);
      }

      function stop() {
        if (timer) window.clearInterval(timer);
      }

      phone.addEventListener("mouseenter", stop);
      phone.addEventListener("mouseleave", start);
      phone.addEventListener("focusin", stop);
      phone.addEventListener("focusout", start);
      start();
    }
  }

  var items = document.querySelectorAll(".faq-item");
  items.forEach(function (item) {
    var button = item.querySelector("button");
    if (!button) return;
    button.addEventListener("click", function () {
      var open = item.classList.contains("is-open");
      items.forEach(function (other) {
        other.classList.remove("is-open");
      });
      if (!open) item.classList.add("is-open");
    });
  });
})();
