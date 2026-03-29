# Produto — Contextualize IA (base para contexto com IA na IDE)

**O que o produto é:** uma **base de criação** — em especial o **`templates/PRD-BASE-AGENTE-IDE.md`**, para o usuário **copiar e colar no chat do agente** (Cursor, VS Code, Antigravity, etc.) com a pasta do projeto aberta. O agente propõe **estrutura, pastas e um `CONTEXT.md` vivo** (perguntas e respostas; atualização contínua), adaptado à necessidade de cada pessoa. O pacote não substitui a conversa com o agente: **é o ponto de partida**.

**Tipo:** toolkit (Markdown + HTML opcional + material de apoio em `conteudo/`).

**Mapa rápido:** o fluxo do usuário é **PRD → agente**; tudo em [`conteudo/`](./conteudo/) é **opcional** ou **interno** (ver [`conteudo/README.md`](./conteudo/README.md) — inclui o que é documentação A3 e não “método do aluno”).

---

## Para quem é

Quem já usa IA no dia a dia e quer **manual em arquivo** (não só no chat), com **repositório versionado** e **contexto alinhado** ao que decidiu — usando o fluxo natural do **agente da IDE**.

---

## Pacote (artefatos principais)

| Artefato | Descrição |
|----------|-----------|
| **[templates/PRD-BASE-AGENTE-IDE.md](./templates/PRD-BASE-AGENTE-IDE.md)** | **Principal:** instruções para o agente montar o repo e manter CONTEXT vivo |
| **[templates/TEMPLATE-CONTEXT.md](./templates/TEMPLATE-CONTEXT.md)** | Modelo de CONTEXT com seção “perguntas em aberto” e ritual de evolução |
| **[index.html](./index.html)** | Boas-vindas (conteúdo do produto, sem linguagem comercial) |
| **[app/index.html](./app/index.html)** | Como usar: copiar PRD na IDE |
| **[diagnostico.html](./diagnostico.html)** | Autoavaliação / travas / próximos passos (não é página de vendas) |
| **[diagnostico-page-content.json](./diagnostico-page-content.json)** | Copy para espelhar o diagnóstico em outro front, se precisar |
| **[download-config.js](./download-config.js)** | `DOWNLOAD_ZIP_URL` — URL pública do ZIP, se aplicável |
| **[conteudo/](./conteudo/)** | Material profundo **opcional** (guia M0–M8, glossário, troubleshooting); **[plano-de-acao.md](./conteudo/plano-de-acao.md)** é **interno A3**, não faz parte do método do usuário |
| **[templates/](./templates/)** | Demais modelos (README, PRD repo, gitignore, ADR, checklist) |

**Fluxo sugerido:** `index.html` → ler `app/index.html` → abrir **`templates/PRD-BASE-AGENTE-IDE.md`** → colar no agente. **Diagnóstico** é opcional.

A trilha longa M0–M8 está só em Markdown em **`conteudo/`** (leitura fora da IDE ou no editor); não há mais player de curso no navegador neste pacote.

---

## Ligação com este repositório (a3-vision-os)

O **a3-vision-os** é caso de uso avançado. Este produto exporta **método e base**, não o conteúdo interno da empresa.

**Referência interna:** [CONTEXT.md](../../../../CONTEXT.md) · [adocs/a3-vision-identity.md](../../../../adocs/a3-vision-identity.md)

---

## Próximos passos (negócio / produto)

1. Piloto: colar só o PRD e medir se o agente cria estrutura útil em cerca de 30 minutos.  
2. Ajustar PRD conforme fricção (perguntas demais / de menos).  
3. Precificação e canal de distribuição à parte deste pacote.
