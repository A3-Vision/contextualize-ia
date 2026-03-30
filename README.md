# Produto — Contextualize IA (base para contexto com IA na IDE)

**Em síntese:** é uma **base de criação**. O arquivo central para o fluxo é **`cliente/templates/PRD-BASE-AGENTE-IDE.md`**: o usuário **copia e cola no chat do agente** (Cursor, VS Code, Antigravity, etc.) com a pasta do projeto aberta. O PRD **orienta** o agente a criar o manual vivo **dentro de `contexto/`** na raiz do repositório (`contexto/CONTEXT.md`, `docs/`, `decisoes/`, etc.), **sem** alterar o pacote em `cliente/` nem `home.html`. O pacote **não substitui** a conversa com o agente: é só o **ponto de partida**.

**Tipo:** toolkit (Markdown + HTML opcional + material de apoio em `cliente/conteudo/`).

Leitura narrativa (o que é, para que serve, como usar): **[README-CONTEXTUALIZA-IA.md](./README-CONTEXTUALIZA-IA.md)**.

**Em uma linha:** o fluxo natural é **PRD → agente**. O que está em [`cliente/conteudo/`](./cliente/conteudo/) é **opcional** ou **interno**; em [`cliente/conteudo/README.md`](./cliente/conteudo/README.md) está explícito o que é documentação A3 e o que **não** entra no método do aluno.

---

## Para quem é

Para quem já usa IA no dia a dia e quer um **manual em arquivo** (não só no chat), com **repositório versionado** e **contexto alinhado** às decisões — no fluxo habitual do **agente da IDE**.

---

## Pacote (artefatos principais)

| Artefato | Descrição |
|----------|-----------|
| **[README.md](./README.md)** | Mapa do pacote na raiz (este arquivo) |
| **[README-CONTEXTUALIZA-IA.md](./README-CONTEXTUALIZA-IA.md)** | Guia narrativo: o que é, para que serve, como usar |
| **[cliente/templates/PRD-BASE-AGENTE-IDE.md](./cliente/templates/PRD-BASE-AGENTE-IDE.md)** | **Principal:** instruções para o agente montar o repo e manter CONTEXT vivo |
| **[cliente/templates/TEMPLATE-CONTEXT.md](./cliente/templates/TEMPLATE-CONTEXT.md)** | Modelo de CONTEXT com seção “perguntas em aberto” e ritual de evolução |
| **[index.html](./index.html)** | Entrada com `python -m http.server`: redireciona para `home.html` (evita listagem em `/`) |
| **[serve.json](./serve.json)** | Config do pacote `serve` (`npx serve`): reescreve `/` → conteúdo de `home.html` (sem listagem, sem tela extra) |
| **[home.html](./home.html)** | Boas-vindas (conteúdo do produto, foco em uso) |
| **[cliente/app/index.html](./cliente/app/index.html)** | Como usar: copiar PRD na IDE |
| **[cliente/app/explorador.html](./cliente/app/explorador.html)** | Árvore de **`contexto/`** + pré-visualização de `.md` (manifesto em `.js` + `.json`; servidor HTTP na raiz para Markdown completo em todos os navegadores) |
| **[cliente/app/estrutura-manifest.json](./cliente/app/estrutura-manifest.json)** | Lista de arquivos gerada por script — alimenta o explorador via `fetch` (HTTP) |
| **[cliente/app/estrutura-manifest.js](./cliente/app/estrutura-manifest.js)** | Mesmo payload que o JSON — carregado por `<script>` para o explorador funcionar também em `file://` |
| **[cliente/scripts/gerar-estrutura-manifest.js](./cliente/scripts/gerar-estrutura-manifest.js)** | `node cliente/scripts/gerar-estrutura-manifest.js` na raiz do pacote (gera `.json` e `.js`) |
| **[cliente/app/diagnostico.html](./cliente/app/diagnostico.html)** | Autoavaliação / travas / próximos passos |
| **[cliente/app/diagnostico-page-content.json](./cliente/app/diagnostico-page-content.json)** | Copy para espelhar o diagnóstico em outro front, se precisar |
| **[cliente/app/download-config.js](./cliente/app/download-config.js)** | `DOWNLOAD_ZIP_URL` — URL pública do ZIP, se aplicável |
| **[cliente/conteudo/](./cliente/conteudo/)** | Material profundo **opcional** (guia M0–M8, glossário, troubleshooting); **[plano-de-acao.md](./cliente/conteudo/plano-de-acao.md)** é **interno A3**, não faz parte do método do usuário |
| **[cliente/templates/](./cliente/templates/)** | Demais modelos (README, PRD repo, gitignore, ADR, checklist) |

**Fluxo sugerido:** `home.html` → ler `cliente/app/index.html` → abrir **`cliente/templates/PRD-BASE-AGENTE-IDE.md`** → colar no agente. **Diagnóstico** é opcional.

A trilha longa M0–M8 está só em Markdown em **`cliente/conteudo/`** (leitura fora da IDE ou no editor). O **explorador** oferece uma visão simples da pasta **`contexto/`** no navegador; não substitui a IDE nem um aplicativo dedicado ao projeto. As telas **`home.html`** e **`cliente/app/*.html`** compartilham o mesmo idioma visual (gradiente, cards, botões de navegação).

**Resumo do pacote (copy neutra, opcional):** [`cliente/app/produto-page-content.json`](./cliente/app/produto-page-content.json) — venda e oferta ficam fora desta pasta.

---

## Ligação com este repositório (a3-vision-os)

O **a3-vision-os** é caso de uso avançado. Este produto exporta **método e base**, não o conteúdo interno da empresa.

**Referência interna:** [CONTEXT.md](../../../../CONTEXT.md) · [adocs/a3-vision-identity.md](../../../../adocs/a3-vision-identity.md)

---

## Próximos passos (negócio / produto)

1. Piloto: colar só o PRD e medir se o agente cria estrutura útil em cerca de 30 minutos.  
2. Ajustar PRD conforme fricção (perguntas demais / de menos).  
3. Precificação e canal de distribuição à parte deste pacote.
