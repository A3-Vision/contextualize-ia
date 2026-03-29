# Pasta `app/` — páginas estáticas

- **`index.html`** — instruções para copiar o PRD e colar no agente da IDE; usa `assets/styles.css`, `theme.js`.
- **`explorador.html`** — lista a árvore de **`contexto/`** (na raiz do pacote) via `estrutura-manifest.json` e renderiza `.md` (Marked via CDN). **Como usar:** na raiz do pacote, `node cliente/scripts/gerar-estrutura-manifest.js`, depois `npx serve` na raiz e abrir `/cliente/app/explorador.html`.
- **`estrutura-manifest.json`** — gerado pelo script em **`../scripts/`**; versionar ou regenerar após mudanças em `contexto/`.
- **`explorador.css`** — layout do explorador.
- **`assets/explorador.js`** — lógica da árvore e fetch dos arquivos.
- **`diagnostico.html`** — autoavaliação em abas; usa `assets/app.js` e `assets/theme.js`.
- **`landing.css`** — estilos extras da landing; importado por **`../../home.html`**.
- **`download-config.js`** — `DOWNLOAD_ZIP_URL` para o botão de ZIP em **`../../home.html`**.
- **`diagnostico-page-content.json`** — copy estruturada para espelhar o diagnóstico em outro front.
- **`assets/app.js`** — troca de abas; usado por **`diagnostico.html`**.
- **`assets/styles.css`** — tema e componentes compartilhados (landing importa o mesmo arquivo).

Não há JavaScript de “curso interativo” no browser: o conteúdo extenso está em **`../conteudo/*.md`**.
