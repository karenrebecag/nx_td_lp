// loader.js — entry point CDN. Auto-generado por CI en cada release (no editar a mano).
// Host carga SOLO este archivo con @latest; el loader inyecta CSS y JS
// al tag inmutable (vX.Y.Z). CI purga nx_td_lp@latest en jsDelivr tras cada release.
(function () {
  var v = "1.0.3";
  var base = "https://cdn.jsdelivr.net/gh/karenrebecag/nx_td_lp";

  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = base + "@" + v + "/dist/landing.css";
  document.head.appendChild(css);

  var js = document.createElement("script");
  js.type = "module";
  js.setAttribute("data-cfasync", "false");
  js.src = base + "@" + v + "/dist/landing.js";
  document.head.appendChild(js);
})();
