(function () {
  var KEY = 'contextualize-ia-theme';
  function apply(t) {
    document.documentElement.setAttribute('data-theme', t);
    try {
      localStorage.setItem(KEY, t);
    } catch (e) {}
  }
  var saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch (e) {}
  apply(saved === 'light' ? 'light' : 'dark');
  window.toggleTheme = function () {
    var cur = document.documentElement.getAttribute('data-theme') || 'dark';
    apply(cur === 'dark' ? 'light' : 'dark');
  };
})();
