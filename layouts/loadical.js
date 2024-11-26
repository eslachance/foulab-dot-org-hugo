const icaldebug = (new URLSearchParams(location.search)).get('icaldebug') != null;

// JSON-LD is only useful to Google crawler, so save some resources (network
// + CPU) for real users.
//
// https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers
if (navigator.userAgent.indexOf('Google') != -1 || icaldebug) {
    document.addEventListener('DOMContentLoaded', function () {
    let script = document.createElement('script');
    script.src = '/js/ical2jsonld.js';
    script.addEventListener('load', function () {
        ical2jsonld();
    });
    document.body.appendChild(script);
    });
}
