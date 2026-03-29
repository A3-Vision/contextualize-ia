(function () {
  'use strict';

  var CONTEXTO_BASE = '../../contexto/';
  var manifestUrl = './estrutura-manifest.json';

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === 'class') n.className = attrs[k];
        else if (k === 'text') n.textContent = attrs[k];
        else n.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c) n.appendChild(c);
    });
    return n;
  }

  function buildTree(nodes) {
    var ul = el('ul');
    (nodes || []).forEach(function (node) {
      if (node.type === 'dir') {
        var details = el('details', { open: 'open' });
        var summary = el('summary', { text: '📁 ' + node.name });
        details.appendChild(summary);
        details.appendChild(buildTree(node.children));
        ul.appendChild(el('li', null, [details]));
      } else {
        var btn = el('button', {
          type: 'button',
          class: 'tree-file-btn',
          'data-relpath': node.relPath,
          text: '📄 ' + node.name,
        });
        btn.addEventListener('click', function () {
          openFile(node.relPath, btn);
        });
        ul.appendChild(el('li', null, [btn]));
      }
    });
    return ul;
  }

  var activeBtn = null;
  var previewEl = document.getElementById('explorador-preview');
  var previewTitle = document.getElementById('explorador-preview-title');

  function setActive(btn) {
    if (activeBtn) activeBtn.classList.remove('is-active');
    activeBtn = btn;
    if (btn) btn.classList.add('is-active');
  }

  function openFile(relPath, btn) {
    setActive(btn);
    var url = CONTEXTO_BASE + relPath.split('/').map(encodeURIComponent).join('/');
    previewTitle.textContent = 'contexto/' + relPath;
    previewEl.innerHTML =
      '<p class="explorador-meta" style="margin:0">Carregando…</p>';

    fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error(r.status + ' ' + r.statusText);
        return r.text();
      })
      .then(function (text) {
        var lower = relPath.toLowerCase();
        if (lower.endsWith('.md') && typeof marked !== 'undefined') {
          marked.setOptions({ breaks: true, gfm: true });
          previewEl.innerHTML =
            '<div class="md-content">' + marked.parse(text) + '</div>';
        } else {
          previewEl.innerHTML =
            '<p class="explorador-meta">Pré-visualização em texto (não é .md ou marked indisponível).</p><pre style="font-size:12px;overflow:auto;max-height:55vh">' +
            escapeHtml(text.slice(0, 120000)) +
            (text.length > 120000 ? '\n\n… (truncado)' : '') +
            '</pre>';
        }
      })
      .catch(function (err) {
        previewEl.innerHTML =
          '<p class="explorador-error">Não foi possível abrir o arquivo. Use um servidor HTTP na raiz do pacote (ex.: <code>npx serve</code>) e confira se <code>contexto/' +
          escapeHtml(relPath) +
          '</code> existe.</p><p class="explorador-meta">' +
          escapeHtml(String(err.message)) +
          '</p>';
      });
  }

  function escapeHtml(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function renderManifest(data) {
    var mount = document.getElementById('explorador-tree-mount');
    mount.innerHTML = '';

    var rootLabel = el('div', {
      class: 'tree-root-label',
      text: '/' + (data.rootLabel || 'contexto'),
    });
    mount.appendChild(rootLabel);

    var treeWrap = el('div', { class: 'tree' });
    if (!data.children || data.children.length === 0) {
      treeWrap.appendChild(
        el('p', {
          class: 'explorador-empty',
          text:
            'Nenhum arquivo listado. Crie a pasta contexto/ com o agente (PRD) e rode: node cliente/scripts/gerar-estrutura-manifest.js',
        })
      );
    } else {
      treeWrap.appendChild(buildTree(data.children));
    }
    mount.appendChild(treeWrap);

    var meta = document.getElementById('explorador-manifest-meta');
    if (data.generatedAt) {
      meta.textContent =
        'Manifesto gerado em ' +
        data.generatedAt +
        '. ' +
        (data.note || '');
    } else {
      meta.textContent = data.note || '';
    }

    previewEl.innerHTML =
      '<p class="explorador-empty">Selecione um arquivo na árvore para ver o conteúdo.</p>';
    previewTitle.textContent = '—';
    setActive(null);
  }

  fetch(manifestUrl)
    .then(function (r) {
      if (!r.ok) throw new Error('Manifest não encontrado');
      return r.json();
    })
    .then(renderManifest)
    .catch(function () {
      document.getElementById('explorador-tree-mount').innerHTML =
        '<p class="explorador-error">Não foi possível carregar estrutura-manifest.json. Abra esta página via servidor HTTP (não use file://).</p>';
    });
})();
