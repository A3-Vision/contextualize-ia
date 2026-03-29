(function () {
  'use strict';

  var CONTEXTO_BASE = '../../contexto/';
  var manifestUrl = './estrutura-manifest.json';

  var flatFiles = [];
  var previewEl = document.getElementById('explorador-preview');
  var previewTitle = document.getElementById('explorador-preview-title');

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

  function flattenFiles(nodes, out) {
    out = out || [];
    (nodes || []).forEach(function (node) {
      if (node.type === 'dir') {
        flattenFiles(node.children, out);
      } else if (node.type === 'file') {
        out.push({ relPath: node.relPath, name: node.name });
      }
    });
    return out;
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

  function clearActiveFileUi() {
    document
      .querySelectorAll('.tree-file-btn.is-active, .explorador-search-hit.is-active')
      .forEach(function (x) {
        x.classList.remove('is-active');
      });
  }

  function openFile(relPath, btn) {
    clearActiveFileUi();
    if (btn) btn.classList.add('is-active');

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

  /** true | false | null (manifesto antigo) */
  function contextoExistsFlag(data) {
    if (typeof data.contextoExists === 'boolean') {
      return data.contextoExists;
    }
    return null;
  }

  function renderEmptyCallout(data) {
    var box = document.getElementById('explorador-empty-callout');
    var hasFiles = flatFiles.length > 0;
    if (hasFiles) {
      box.hidden = true;
      box.innerHTML = '';
      return;
    }

    box.hidden = false;
    var flag = contextoExistsFlag(data);

    if (flag === false) {
      box.innerHTML =
        '<h3>Repositório de contexto ainda não existe</h3>' +
        '<p>A pasta <code>contexto/</code> não está neste pacote. É o estado inicial: use o <strong>PRD</strong> (<code>cliente/templates/PRD-BASE-AGENTE-IDE.md</code>) no agente da IDE para criar o manual vivo.</p>' +
        '<p>Em seguida execute na raiz do pacote: <code>node cliente/scripts/gerar-estrutura-manifest.js</code> e recarregue esta página.</p>';
    } else if (flag === true) {
      box.innerHTML =
        '<h3>Pasta contexto/ vazia</h3>' +
        '<p>A pasta existe, mas não há arquivos para listar (ou só há nomes que começam com <code>.</code>, ignorados pelo manifesto).</p>' +
        '<p>Crie <code>CONTEXT.md</code> e o restante com o agente; depois rode o script do manifesto de novo.</p>';
    } else {
      box.innerHTML =
        '<h3>Nada para exibir ainda</h3>' +
        '<p>Não há arquivos no manifesto. Se a pasta <code>contexto/</code> ainda não existir, siga o PRD com o agente; se já existir, rode <code>node cliente/scripts/gerar-estrutura-manifest.js</code> na raiz do pacote para atualizar a lista.</p>';
    }
  }

  function setupSearch() {
    var input = document.getElementById('explorador-search');
    var status = document.getElementById('explorador-search-status');
    var resultsEl = document.getElementById('explorador-search-results');
    var treeBody = document.getElementById('explorador-tree-body');

    function applyFilter() {
      var raw = input.value || '';
      var q = raw.trim().toLowerCase();

      if (!q) {
        resultsEl.hidden = true;
        resultsEl.innerHTML = '';
        treeBody.hidden = false;
        status.textContent =
          flatFiles.length > 0
            ? flatFiles.length + ' arquivo(s). Digite para filtrar.'
            : '';
        return;
      }

      var hits = flatFiles.filter(function (f) {
        return (
          f.name.toLowerCase().indexOf(q) !== -1 ||
          f.relPath.toLowerCase().indexOf(q) !== -1
        );
      });

      treeBody.hidden = true;
      resultsEl.hidden = false;
      resultsEl.innerHTML = '';

      if (hits.length === 0) {
        status.textContent = 'Nenhum resultado para “' + raw.trim() + '”.';
        resultsEl.appendChild(
          el('p', {
            class: 'explorador-empty',
            text: 'Tente outro termo ou apague a busca para voltar à árvore.',
          })
        );
        return;
      }

      status.textContent = hits.length + ' resultado(s).';
      var ul = el('ul');
      hits.forEach(function (f) {
        var btn = el('button', { type: 'button', class: 'explorador-search-hit' });
        btn.appendChild(el('span', { text: f.name }));
        btn.appendChild(
          el('span', {
            class: 'explorador-search-hit-path',
            text: 'contexto/' + f.relPath,
          })
        );
        btn.addEventListener('click', function () {
          openFile(f.relPath, btn);
        });
        ul.appendChild(el('li', null, [btn]));
      });
      resultsEl.appendChild(ul);
    }

    input.addEventListener('input', applyFilter);
    input.addEventListener('search', function () {
      if (!input.value) applyFilter();
    });
  }

  function renderManifest(data) {
    flatFiles = flattenFiles(data.children);

    document.getElementById('explorador-tree-root-label').textContent =
      '/' + (data.rootLabel || 'contexto');

    renderEmptyCallout(data);

    var wrap = document.getElementById('explorador-search-wrap');
    var treeBody = document.getElementById('explorador-tree-body');
    var searchResults = document.getElementById('explorador-search-results');
    var searchInput = document.getElementById('explorador-search');
    var searchStatus = document.getElementById('explorador-search-status');

    searchInput.value = '';
    searchResults.hidden = true;
    searchResults.innerHTML = '';
    clearActiveFileUi();

    if (flatFiles.length > 0) {
      wrap.hidden = false;
      treeBody.hidden = false;
      treeBody.innerHTML = '';
      treeBody.appendChild(buildTree(data.children));
      searchStatus.textContent =
        flatFiles.length + ' arquivo(s). Digite para filtrar.';
    } else {
      wrap.hidden = true;
      treeBody.hidden = false;
      treeBody.innerHTML = '';
      searchStatus.textContent = '';
    }

    if (flatFiles.length > 0) {
      previewEl.innerHTML =
        '<p class="explorador-empty">Selecione um arquivo na árvore ou nos resultados da pesquisa.</p>';
    } else if (contextoExistsFlag(data) === false) {
      previewEl.innerHTML =
        '<p class="explorador-empty">Ainda não há <code>contexto/</code> para pré-visualizar. Depois que o agente criar os arquivos, eles aparecerão aqui.</p>';
    } else if (contextoExistsFlag(data) === true) {
      previewEl.innerHTML =
        '<p class="explorador-empty">A pasta existe, mas está vazia. Adicione arquivos com o agente e regenere o manifesto.</p>';
    } else {
      previewEl.innerHTML =
        '<p class="explorador-empty">Nenhum arquivo listado. Atualize o manifesto com o script na raiz do pacote.</p>';
    }
    previewTitle.textContent = '—';

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
  }

  function renderFetchError() {
    document.getElementById('explorador-tree-root-label').textContent = '';
    var box = document.getElementById('explorador-empty-callout');
    box.hidden = false;
    box.innerHTML =
      '<h3>Não foi possível carregar a lista</h3>' +
      '<p>Abra esta página com um <strong>servidor HTTP</strong> na raiz do pacote (ex.: <code>npx serve</code>). O protocolo <code>file://</code> bloqueia o carregamento do manifesto.</p>';
    document.getElementById('explorador-search-wrap').hidden = true;
    document.getElementById('explorador-tree-body').innerHTML = '';
    document.getElementById('explorador-manifest-meta').textContent = '';
    previewEl.innerHTML =
      '<p class="explorador-error">Use <code>npx serve</code> (ou similar) na pasta do pacote e acesse de novo o explorador.</p>';
  }

  setupSearch();

  fetch(manifestUrl)
    .then(function (r) {
      if (!r.ok) throw new Error('Manifest não encontrado');
      return r.json();
    })
    .then(renderManifest)
    .catch(renderFetchError);
})();
