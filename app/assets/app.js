/**
 * Troca de abas — Contextualize IA (pacote visual)
 * @param {string} id — sufixo do id da section (ex.: 'visao')
 * @param {HTMLButtonElement} btn — botão clicado (passar `this` no HTML)
 */
function showTab(id, btn) {
  document.querySelectorAll('.section').forEach(function (s) {
    s.classList.remove('active');
  });
  document.querySelectorAll('.tab-btn').forEach(function (b) {
    b.classList.remove('active');
  });
  var el = document.getElementById('tab-' + id);
  if (el) el.classList.add('active');
  if (btn) btn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
  var first = document.querySelector('.tab-btn.active');
  if (first && !document.querySelector('.section.active')) {
    var m = first.getAttribute('onclick');
    if (m && m.match(/showTab\('([^']+)'/)) {
      var id = RegExp.$1;
      var sec = document.getElementById('tab-' + id);
      if (sec) sec.classList.add('active');
    }
  }
});
