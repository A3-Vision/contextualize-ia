# Pasta `app/` — páginas estáticas

- **`index.html`** — instruções para copiar o PRD e colar no agente da IDE; usa `assets/styles.css`, `theme.js`.
- **`explorador.html`** — lista a árvore de **`contexto/`** (na raiz do pacote) via `estrutura-manifest.json` e renderiza `.md` (Marked via CDN). **Como usar:** na raiz do pacote, `node cliente/scripts/gerar-estrutura-manifest.js`, depois `npx serve` na raiz e abrir `/cliente/app/explorador.html`.
- **`estrutura-manifest.json`** — gerado pelo script em **`../scripts/`**; versionar ou regenerar após mudanças em `contexto/`.
- **`explorador.css`** — layout do explorador.
- **`assets/explorador.js`** — lógica da árvore e fetch dos arquivos.
- **`assets/copy-ui.js`** — botão copiar em blocos `<pre>` (comandos na landing / `index.html`; trechos em `.md` e texto no explorador).
- **`assets/app-shell.css`** — fundo em gradiente, cards e botões de navegação compartilhados por `index.html`, `diagnostico.html` e `explorador.html` (alinhado à `home.html`).
- **`produto-page-content.json`** — resumo neutro do pacote (textos genéricos; sem preço nem CTA de venda). Útil se quiser espelhar o produto em outro front; a página de venda fica à parte.
- **`diagnostico.html`** — autoavaliação em abas; usa `assets/app.js` e `assets/theme.js`.
- **`landing.css`** — estilos extras da landing; importado por **`../../home.html`**.
- **`download-config.js`** — `DOWNLOAD_ZIP_URL` (repositório oficial) para o ZIP em **`../../home.html`** e no checklist de **`diagnostico.html`**.
- **`diagnostico-page-content.json`** — copy estruturada para espelhar o diagnóstico em outro front.
- **`assets/app.js`** — troca de abas; usado por **`diagnostico.html`**.
- **`assets/styles.css`** — tema e componentes compartilhados (landing importa o mesmo arquivo).

Não há JavaScript de “curso interativo” no browser: o conteúdo extenso está em **`../conteudo/*.md`**.
