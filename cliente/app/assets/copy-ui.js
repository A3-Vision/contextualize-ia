/**
 * Botão "copiar" em blocos <pre> (comandos na landing / trechos no explorador).
 */
(function () {
  'use strict';

  var ICON_SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      return document.execCommand('copy');
    } finally {
      document.body.removeChild(ta);
    }
  }

  function flashBtn(btn, ok) {
    if (!btn) return;
    if (ok) btn.classList.add('is-copied');
    var label = btn.querySelector('.code-copy-btn-label');
    if (ok && label) {
      label.setAttribute('data-prev-label', label.textContent);
      label.textContent = 'Copiado!';
    }
    setTimeout(function () {
      btn.classList.remove('is-copied');
      if (label && label.getAttribute('data-prev-label')) {
        label.textContent = label.getAttribute('data-prev-label');
        label.removeAttribute('data-prev-label');
      }
    }, 1600);
  }

  window.copyToClipboard = function (text, buttonEl) {
    var t = text == null ? '' : String(text);
    var p =
      navigator.clipboard && navigator.clipboard.writeText
        ? navigator.clipboard.writeText(t)
        : Promise.reject();

    return p
      .then(function () {
        flashBtn(buttonEl, true);
        return true;
      })
      .catch(function () {
        if (fallbackCopy(t)) {
          flashBtn(buttonEl, true);
          return true;
        }
        flashBtn(buttonEl, false);
        return false;
      });
  };

  function wrapPre(pre) {
    if (!pre || pre.closest('.code-copy-wrap')) return;
    var wrap = document.createElement('div');
    wrap.className = 'code-copy-wrap';
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'code-copy-btn';
    btn.setAttribute('aria-label', 'Copiar este bloco');
    btn.title = 'Copiar';
    btn.innerHTML = ICON_SVG;
    wrap.insertBefore(btn, pre);

    btn.addEventListener('click', function () {
      var code = pre.querySelector('code') || pre;
      window.copyToClipboard(code.textContent.replace(/\r\n/g, '\n').trim(), btn);
    });
  }

  window.initCodeCopyUI = function (root) {
    root = root || document;
    root.querySelectorAll('pre.local-srv-pre, .md-content pre, pre.explorador-plain-pre').forEach(wrapPre);
  };

  document.addEventListener('DOMContentLoaded', function () {
    window.initCodeCopyUI(document);
  });
})();
