/* El Manco de La Pesquera — main.js (vanilla, sin dependencias) */
(function () {
  "use strict";

  /* ---------- Menú móvil ---------- */
  var masthead = document.querySelector(".masthead");
  var toggle = document.querySelector(".nav-toggle");
  if (masthead && toggle) {
    toggle.addEventListener("click", function () {
      var open = masthead.hasAttribute("data-open");
      if (open) {
        masthead.removeAttribute("data-open");
        toggle.setAttribute("aria-expanded", "false");
      } else {
        masthead.setAttribute("data-open", "");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
    // Cerrar al navegar
    document.addEventListener("click", function (e) {
      if (e.target.closest(".nav a") && masthead.hasAttribute("data-open")) {
        masthead.removeAttribute("data-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Revelado progresivo ---------- */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (!reduced && "IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 5) * 70 + "ms";
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- Vídeo: fachada clic-cargar (YouTube sin cookies) ---------- */
  document.querySelectorAll("[data-video-id]").forEach(function (facade) {
    var id = facade.getAttribute("data-video-id");
    var img = facade.querySelector("img");
    if (img && !img.getAttribute("src")) {
      img.src = "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg";
      img.alt = "";
    }
    facade.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.className = "video-frame";
      iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      iframe.title = facade.getAttribute("data-title") || "Vídeo de YouTube";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      facade.replaceWith(iframe);
    });
  });

  /* ---------- Lightbox para galerías ---------- */
  var lightbox = document.getElementById("lightbox");
  if (lightbox && "showModal" in lightbox) {
    var lbImg = lightbox.querySelector("img");
    var lbCap = lightbox.querySelector("p");
    document.querySelectorAll(".gallery button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var img = btn.querySelector("img");
        if (!img) return;
        lbImg.src = img.currentSrc || img.src;
        lbImg.alt = img.alt || "";
        lbCap.textContent = img.getAttribute("data-caption") || img.alt || "";
        lightbox.showModal();
      });
    });
    lightbox.querySelector(".close").addEventListener("click", function () {
      lightbox.close();
    });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) lightbox.close();
    });
  }

  /* ---------- Scrollspy para el índice de capítulos ---------- */
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
  if (tocLinks.length && "IntersectionObserver" in window) {
    var sections = tocLinks
      .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
      .filter(Boolean);
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        tocLinks.forEach(function (a) {
          a.classList.toggle(
            "current",
            a.getAttribute("href") === "#" + entry.target.id
          );
        });
      });
    }, { rootMargin: "-20% 0px -65% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }
})();
