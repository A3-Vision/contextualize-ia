# Produto — Contextualize IA (base para contexto com IA na IDE)

**O que o produto é:** uma **base de criação** — em especial o **`cliente/templates/PRD-BASE-AGENTE-IDE.md`**, para o usuário **copiar e colar no chat do agente** (Cursor, VS Code, Antigravity, etc.) com a pasta do projeto aberta. O PRD manda o agente criar o manual vivo **dentro de `contexto/`** na raiz do repositório (`contexto/CONTEXT.md`, `docs/`, `decisoes/`, etc.), **sem** editar o pacote em `cliente/` nem `home.html`. O pacote não substitui a conversa com o agente: **é o ponto de partida**.

**Tipo:** toolkit (Markdown + HTML opcional + material de apoio em `cliente/conteudo/`).

**Mapa rápido:** o fluxo do usuário é **PRD → agente**; tudo em [`cliente/conteudo/`](./cliente/conteudo/) é **opcional** ou **interno** (ver [`cliente/conteudo/README.md`](./cliente/conteudo/README.md) — inclui o que é documentação A3 e não “método do aluno”).

---

## Para quem é

Quem já usa IA no dia a dia e quer **manual em arquivo** (não só no chat), com **repositório versionado** e **contexto alinhado** ao que decidiu — usando o fluxo natural do **agente da IDE**.

---

## Pacote (artefatos principais)

| Artefato | Descrição |
|----------|-----------|
| **[cliente/templates/PRD-BASE-AGENTE-IDE.md](./cliente/templates/PRD-BASE-AGENTE-IDE.md)** | **Principal:** instruções para o agente montar o repo e manter CONTEXT vivo |
| **[cliente/templates/TEMPLATE-CONTEXT.md](./cliente/templates/TEMPLATE-CONTEXT.md)** | Modelo de CONTEXT com seção “perguntas em aberto” e ritual de evolução |
| **[home.html](./home.html)** | Boas-vindas (conteúdo do produto, sem linguagem comercial) |
| **[cliente/app/index.html](./cliente/app/index.html)** | Como usar: copiar PRD na IDE |
| **[cliente/app/explorador.html](./cliente/app/explorador.html)** | Árvore de **`contexto/`** + renderização de `.md` (requer servidor HTTP + manifesto) |
| **[cliente/app/estrutura-manifest.json](./cliente/app/estrutura-manifest.json)** | Lista de arquivos gerada por script — alimenta o explorador |
| **[cliente/scripts/gerar-estrutura-manifest.js](./cliente/scripts/gerar-estrutura-manifest.js)** | `node cliente/scripts/gerar-estrutura-manifest.js` na raiz do pacote |
| **[cliente/app/diagnostico.html](./cliente/app/diagnostico.html)** | Autoavaliação / travas / próximos passos (não é página de vendas) |
| **[cliente/app/diagnostico-page-content.json](./cliente/app/diagnostico-page-content.json)** | Copy para espelhar o diagnóstico em outro front, se precisar |
| **[cliente/app/download-config.js](./cliente/app/download-config.js)** | `DOWNLOAD_ZIP_URL` — URL pública do ZIP, se aplicável |
| **[cliente/conteudo/](./cliente/conteudo/)** | Material profundo **opcional** (guia M0–M8, glossário, troubleshooting); **[plano-de-acao.md](./cliente/conteudo/plano-de-acao.md)** é **interno A3**, não faz parte do método do usuário |
| **[cliente/templates/](./cliente/templates/)** | Demais modelos (README, PRD repo, gitignore, ADR, checklist) |

**Fluxo sugerido:** `home.html` → ler `cliente/app/index.html` → abrir **`cliente/templates/PRD-BASE-AGENTE-IDE.md`** → colar no agente. **Diagnóstico** é opcional.

A trilha longa M0–M8 está só em Markdown em **`cliente/conteudo/`** (leitura fora da IDE ou no editor). O **explorador** é uma visão simples da pasta **`contexto/`** no navegador (não substitui IDE nem futuro app Next.js).

---

## Ligação com este repositório (a3-vision-os)

O **a3-vision-os** é caso de uso avançado. Este produto exporta **método e base**, não o conteúdo interno da empresa.

**Referência interna:** [CONTEXT.md](../../../../CONTEXT.md) · [adocs/a3-vision-identity.md](../../../../adocs/a3-vision-identity.md)

---

## Próximos passos (negócio / produto)

1. Piloto: colar só o PRD e medir se o agente cria estrutura útil em cerca de 30 minutos.  
2. Ajustar PRD conforme fricção (perguntas demais / de menos).  
3. Precificação e canal de distribuição à parte deste pacote.
