// Apricus referrer attribution (privacy-minimal: no cookies, no ad tracker, no path).
// Fires exactly ONE Abacus hit per page load, bucketed by the referrer's HOST.
// Why this exists: a page-* hit can say a browser arrived but never FROM WHERE.
// Cycle 383 measured 2 real visits with ref-github=0 - a real arrival I could not
// attribute, which is the difference between "a channel works" and "a mystery".
//
// The URLs are spelled out in full, one literal per bucket, ON PURPOSE:
// tools/site_counter_impl.py discovers its key list by regexing these pages, so a
// URL assembled at runtime (NS + key) would make every ref-* key invisible to its
// own instrument and the attribution would silently read as absent forever.
//
// Same-origin referrers are IGNORED: a visitor clicking from index to
// /mee6-alternative is ONE arrival, not two, and counting internal navigation
// would inflate a bucket with nobody in it.
(function () {
  try {
    var HITS = {
      "ref-direct": "https://abacus.jasoncameron.dev/hit/apricus-bot/ref-direct",
      "ref-github": "https://abacus.jasoncameron.dev/hit/apricus-bot/ref-github",
      "ref-github-io": "https://abacus.jasoncameron.dev/hit/apricus-bot/ref-github-io",
      "ref-search": "https://abacus.jasoncameron.dev/hit/apricus-bot/ref-search",
      "ref-social": "https://abacus.jasoncameron.dev/hit/apricus-bot/ref-social",
      "ref-other": "https://abacus.jasoncameron.dev/hit/apricus-bot/ref-other",
      "click-install": "https://abacus.jasoncameron.dev/hit/apricus-bot/click-install"
    };
    var r = document.referrer || "";
    var here = (location.hostname || "").toLowerCase();
    var host = "";
    try { host = r ? ((new URL(r)).hostname || "").toLowerCase() : ""; } catch (e) { host = ""; }
    if (host && here && host === here) { return; }
    var key;
    if (!r || !host) { key = "ref-direct"; }
    else if (/github\.io$/.test(host)) { key = "ref-github-io"; }  // GitHub Pages = my OWN crawl path (cycle 427 lever)
    else if (/github\.com$/.test(host)) { key = "ref-github"; }   // github.com + gist.github.com READMEs
    else if (/(^|\.)google\.|bing\.|duckduckgo\.|startpage\.|brave\.|marginalia|mojeek|ecosia|searx/i.test(host)) { key = "ref-search"; }
    else if (/(t\.co$|twitter\.|x\.com$|bsky\.|reddit\.|discord\.|ycombinator|linkedin\.|facebook\.|t\.me$|youtu\.?be)/i.test(host)) { key = "ref-social"; }
    else { key = "ref-other"; }
    var img = new Image(1, 1);
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    img.style.position = "absolute";
    img.style.left = "-9999px";
    img.src = HITS[key];
  } catch (e) { /* attribution must never break a page */ }
})();
// Install-CTA click beacon. Why this exists: page-* counts a LOAD and ref-* counts
// where that load came from, but NOTHING counted the click on "Add to Discord".
// So page-install=0 could not distinguish "nobody clicked" from "everyone clicked
// and Discord's page failed them" - two diagnoses demanding opposite actions. This
// fires on the click itself, so it covers every CTA on every page at once instead
// of only the READMEs' one link into install.html.
//
// Registered ONLY when addEventListener exists: three node guards (probe_beacon_
// fires.py, probe_referrer_buckets.py stub document WITHOUT it) would otherwise
// throw at load and read as BEACON_DEFECT against correct code. Capture phase so
// the anchor's own navigation cannot cancel the hit. The hit is ALWAYS an Image GET:
// Abacus counts GET and rejects POST with 403, so sendBeacon is never used here (see
// the measured note above). The node harnesses stub Image, so they still see one hit.
(function () {
  try {
    if (typeof document === "undefined" || typeof document.addEventListener !== "function") { return; }
    document.addEventListener("click", function (ev) {
      try {
        var el = ev && ev.target;
        while (el && el.tagName !== "A") { el = el.parentElement; }
        var href = el && el.href ? String(el.href) : "";
        if (href.indexOf("/oauth2/authorize") < 0 && href.indexOf("/install.html") < 0) { return; }
        var url = "https://abacus.jasoncameron.dev/hit/apricus-bot/click-install";
        // No sendBeacon: it POSTs, and Abacus answers POST with 403 'Cross-site POST
        // form submissions are forbidden' while returning true for the enqueue. Only
        // the Image GET below is counted (probe_abacus_verb.py, cycle 431).
        var img = new Image(1, 1);
        img.alt = "";
        img.setAttribute("aria-hidden", "true");
        img.style.position = "absolute";
        img.style.left = "-9999px";
        img.src = url;
      } catch (e) { /* a click must never be broken by attribution */ }
    }, true);
  } catch (e) { /* registration must never break a page */ }
})();
