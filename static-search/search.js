/* Exponential static publishing: the search of a static copy (exp-static-search/1). No library, no server. */
(function () {
  'use strict';
  var config = JSON.parse(document.getElementById('exp-static-search-config').textContent || '{}');
  var params = new URLSearchParams(window.location.search);
  var query = (params.get('SearchText') || params.get('q') || '').trim();
  var input = document.getElementById('exp-static-q');
  var list = document.getElementById('exp-static-results');
  var count = document.getElementById('exp-static-count');
  input.value = query;
  if (!query) { return; }
  var lang = (document.documentElement.lang || '').toLowerCase();
  var indexes = config.indexes || {};
  var file = indexes[lang] || indexes[lang.split('-')[0]] || indexes[Object.keys(indexes)[0]];
  if (!file) { count.textContent = config.nothing; return; }
  function words(s) { return s.toLocaleLowerCase().split(/[^\p{L}\p{N}]+/u).filter(function (w) { return w.length > 1; }); }
  fetch(file).then(function (r) { return r.json(); }).then(function (index) {
    var wanted = words(query);
    var hits = [];
    (index.pages || []).forEach(function (p) {
      var title = (p.t || '').toLocaleLowerCase(), terms = ' ' + (p.k || '') + ' ', teaser = (p.d || '').toLocaleLowerCase();
      var score = 0, all = true;
      wanted.forEach(function (w) {
        var s = 0;
        if (title.indexOf(w) !== -1) { s += 10; }
        if (terms.indexOf(' ' + w) !== -1) { s += 5; }
        if (teaser.indexOf(w) !== -1) { s += 2; }
        if (!s) { all = false; }
        score += s;
      });
      if (score && all) { hits.push({ p: p, s: score }); }
    });
    hits.sort(function (a, b) { return b.s - a.s; });
    count.textContent = hits.length ? (config.results || '%count').replace('%count', hits.length) : config.nothing;
    hits.slice(0, 50).forEach(function (h) {
      var li = document.createElement('li'), a = document.createElement('a'), d = document.createElement('p');
      a.href = h.p.u === '' ? './' : h.p.u;
      a.textContent = h.p.t || h.p.u;
      d.textContent = h.p.d || '';
      li.appendChild(a); li.appendChild(d); list.appendChild(li);
    });
  }).catch(function () { count.textContent = config.nothing; });
}());
