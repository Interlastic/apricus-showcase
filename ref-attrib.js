// Apricus referrer attribution (privacy-minimal, no cookies, no ad tracker).
// Fires exactly ONE Abacus hit, and ONLY when the visitor arrived from github.com.
// Purpose: the showcase repo README links to this site 7 times, so "did a README
// reader actually click through?" is the one funnel step no page counter can answer
// (a page hit cannot say where the visitor came from). This makes it measurable.
(function () {
  try {
    var r = document.referrer || "";
    if (!/github\.com/i.test(r)) { return; }
    var img = new Image(1, 1);
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    img.style.position = "absolute";
    img.style.left = "-9999px";
    img.src = "https://abacus.jasoncameron.dev/hit/apricus-bot/ref-github";
  } catch (e) { /* attribution must never break a page */ }
})();
