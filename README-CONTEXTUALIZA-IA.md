# Contextualize IA — O que é, para que serve e como usar

Este documento resume o produto **Contextualize IA** (também referido como pacote ou base **Contextualize**): conceito, objetivo e passos práticos de uso.

---

## O que é

O **Contextualize IA** é um **toolkit** composto principalmente de **Markdown**, **HTML estático opcional** e material de apoio em `cliente/conteudo/`. Não é um aplicativo que roda lógica de negócio no servidor: é uma **base de criação** para quem já usa IA no dia a dia na IDE.

O artefato central do fluxo é o arquivo **`cliente/templates/PRD-BASE-AGENTE-IDE.md`**: um PRD (Product Requirements Document) em texto que você **copia e cola no chat do agente** (Cursor, VS Code com Copilot, Antigravity, etc.) com a **pasta do projeto aberta** no editor.

O pacote **não substitui** a conversa com o agente. Ele é o **ponto de partida**: instruções claras para o assistente montar e manter um **manual vivo em arquivos**, versionado em Git, alinhado ao que você decidir.

---

## Para que serve

| Necessidade | Como o Contextualize ajuda |
|-------------|------------------------------|
| Ter **contexto em arquivo**, não só no histórico do chat | O agente cuida de pastas e Markdown sob `contexto/`, com foco em `contexto/CONTEXT.md`. |
| **Repositório versionado** e decisões rastreáveis | Estrutura sugerida inclui `docs/`, `decisoes/`, `.gitignore` na raiz. |
| **Alinhamento** entre sessões | O PRD pede ritual: em novas conversas, o agente **lê o CONTEXT primeiro** e atualiza quando o escopo mudar. |
| Separar **pacote de distribuição** do **seu manual** | Tudo que é “seu” fica em `contexto/`; `cliente/`, `home.html`, etc. são referência — o agente não deve misturar ou sobrescrever o produto com o seu conteúdo. |

Em uma frase: serve para **organizar o contexto do seu projeto em um manual vivo** (`CONTEXT.md` e pasta `contexto/`), **orientado pelo agente da IDE**, a partir de um PRD pronto para colar.

---

## Como usar

### Fluxo principal (IDE + PRD)

1. Crie uma pasta vazia ou abra um repositório Git no computador.
2. Abra essa pasta no **Cursor**, **VS Code**, **Antigravity** ou outra IDE com agente que leia o projeto.
3. Abra **`cliente/templates/PRD-BASE-AGENTE-IDE.md`**, selecione o conteúdo inteiro e **cole no chat do agente** (ou anexe o arquivo, se a IDE permitir).
4. **Responda às perguntas** do agente (finalidade do repositório, Git, dados sensíveis, etc.).
5. Deixe o agente propor a árvore em **`contexto/`** e o primeiro **`contexto/CONTEXT.md`**; depois refinam juntos.

O template detalhado de `CONTEXT.md` está em **`cliente/templates/TEMPLATE-CONTEXT.md`** — o agente pode fundir com o que vocês conversarem.

### O que o agente deve criar (visão geral)

Na **raiz do repositório**, o manual do usuário concentra-se em:

- **`contexto/CONTEXT.md`** — manual vivo (incluindo seções como perguntas em aberto ou próximos passos).
- **`contexto/README.md`**, **`contexto/docs/`**, **`contexto/decisoes/`** — conforme fizer sentido.
- **`.gitignore`** na raiz do repositório para proteger segredos e artefatos locais.

Se a raiz também contiver este pacote (pastas `cliente/`, `home.html`, etc.), esses itens são **leitura de referência**; o fluxo do PRD orienta o agente a **não editar** o pacote como se fosse o manual do usuário.

### Ver o pacote no navegador (opcional)

As telas **`home.html`** e **`cliente/app/*.html`** (como usar, explorador, diagnóstico) são **HTML/CSS/JS estático**. Para links, fontes e o **explorador** (`fetch`) funcionarem bem, use um **servidor HTTP** na **raiz do pacote** (onde está `home.html`), não apenas `file://`.

**Opções comuns:**

- **Python 3:** na pasta raiz do pacote, `python -m http.server 8080` e abra `http://localhost:8080/` (o `index.html` na raiz redireciona para `home.html`).
- **Node:** `npx serve -p 8080` — o arquivo `serve.json` faz a rota `/` entregar o conteúdo de `home.html`.
- **Live Server** (extensão no VS Code/Cursor) com a raiz do projeto correta.

Páginas úteis após subir o servidor:

- **`/home.html`** — boas-vindas e atalhos.
- **`/cliente/app/index.html`** — passo a passo “como usar no editor”.
- **`/cliente/app/explorador.html`** — árvore da pasta **`contexto/`** e leitura de `.md` (pode exigir manifesto gerado com `node cliente/scripts/gerar-estrutura-manifest.js` na raiz do pacote).
- **`/cliente/app/diagnostico.html`** — autoavaliação e próximos passos (opcional).

### Material extra (opcional)

Em **`cliente/conteudo/`** há aprofundamento: guia longo (trilha M0–M8), glossário, troubleshooting e outros. Leitura fora do fluxo mínimo “só colar o PRD”. Detalhes do que é documentação interna vs. método do usuário estão em **`cliente/conteudo/README.md`**.

---

## O que o Contextualize não é

- **Não** é substituto de julgamento humano (legal, compliance, negócio).
- **Não** preenche dados inventados para “parecer completo” — o PRD manda **perguntar** o que não estiver explícito.
- **Não** obriga automação ou código de produção sem você pedir.

---

## Resumo

1. **O que é:** base (toolkit) com PRD para colar no agente da IDE e templates em `cliente/templates/`.
2. **Para que serve:** criar e manter um **manual vivo em `contexto/`**, com `CONTEXT.md` como eixo, em Git.
3. **Como usar:** abrir o projeto na IDE → colar **`PRD-BASE-AGENTE-IDE.md`** no chat → responder ao agente → evoluir `contexto/` nas sessões seguintes; navegador e explorador são opcionais com servidor HTTP local.

Para o mapa completo de arquivos do pacote, consulte também o **[README.md](./README.md)** na raiz do repositório.
