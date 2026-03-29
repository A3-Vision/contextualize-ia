# PRD — Contextualize IA (instruções para o agente da IDE)

**Cole este arquivo inteiro no chat do agente** (Cursor, VS Code + Copilot, Antigravity, etc.) com a pasta do projeto **já aberta** no editor. O produto Contextualize IA entrega **esta base**; o repositório que você criar será **seu** e deve refletir **sua** necessidade — não um template rígido.

---

## 1. Objetivo

Criar ou reorganizar um **repositório de contexto para IA**: pastas e arquivos em Markdown versionáveis (Git), onde o arquivo central é **`contexto/CONTEXT.md` vivo** — isto é, o agente **atualiza** esse arquivo (e o que mais existir em **`contexto/`**) conforme você responde perguntas e o projeto evolui.

## 2. O que você (agente) deve fazer

1. **Não inventar** dados sobre o usuário, negócio, prazos ou terceiros. O que não estiver escrito, **pergunte**.
2. **Antes** de criar dezenas de arquivos, faça **2 a 5 perguntas** para entender: finalidade do repo, nível de conforto com Git/terminal, e se há dados sensíveis a evitar no versionamento.
3. **Pasta `contexto/` (obrigatória para o que você criar):** tudo o que este PRD pedir para existir — `CONTEXT.md`, `README` de índice humano, `docs/`, `decisoes/`, pastas de domínio — deve ficar **dentro de `contexto/`** na **raiz do repositório** (`contexto/CONTEXT.md`, etc.). O agente deve **entender e manter** essa convenção em toda sessão: o “manual vivo” mora em `contexto/`; caminhos relativos no mapa do repo são relativos a `contexto/` salvo indicação contrária do usuário.
4. **Não mexer no pacote de distribuição:** se existirem na raiz `cliente/`, `home.html` e/ou o `README.md` do produto Contextualize IA, **não** edite, mova, renomeie nem recrie esses artefatos dentro de `contexto/`. São leitura de referência (`cliente/templates/`, etc.).
5. Propor uma **estrutura mínima viável** **dentro de `contexto/`** (poucas pastas) e **expandir só quando fizer sentido** para o domínio do usuário.
6. Criar um **`contexto/CONTEXT.md` inicial** a partir do template mental abaixo (e de `cliente/templates/TEMPLATE-CONTEXT.md` se disponível), com seções claras e campos `<!-- preencher com o usuário -->` ou listas de “perguntas pendentes”.
7. Definir um **ritual**: em novas sessões, o agente **lê `contexto/CONTEXT.md` primeiro** e propõe atualizações quando o usuário mudar de ideia ou de escopo.
8. Garantir **`.gitignore` na raiz do repositório** (um arquivo cobrindo o repo inteiro: ex.: `.env`, segredos, caches de IDE se aplicável). **Não** substituir o `.gitignore` do pacote sem alinhamento; **atualizar ou fundir** se já existir.

## 3. Estrutura sugerida (ajuste ao que o usuário precisar)

Tudo abaixo que for **criado por este fluxo** fica sob **`contexto/`**. A raiz do Git pode ainda conter o pacote (somente leitura para o agente).

```
[raiz do repositório]/
  .gitignore                 ← na raiz; protege o repo inteiro
  contexto/
    README.md                ← índice humano; links para CONTEXT e docs
    CONTEXT.md                 ← manual vivo para o agente + mapa do repo
    docs/
      prd.md                   ← PRD de uma página deste repositório (opcional)
    decisoes/                  ← notas ou ADRs quando houver decisão importante
```

**Se** a raiz também tiver o pacote Contextualize IA (referência, não editar pelo fluxo):

```
  cliente/                   ← pacote: templates, app, conteudo…
  home.html
  README.md                  ← README do produto (não sobrescrever com o manual do usuário)
```

Pastas extras **dentro de `contexto/`** (ex.: `negocio/`, `pessoal/`, `clientes/`) só se o usuário confirmar que precisa.

## 4. CONTEXT.md vivo — regras

- O arquivo é **`contexto/CONTEXT.md`** (caminho padrão). O CONTEXT não é texto estático para sempre: deve ter seção **“Perguntas em aberto”** ou **“Última conversa / próximos passos”** que o agente atualiza.
- Toda alteração relevante de regra deve **refletir no CONTEXT** ou em `contexto/decisoes/` com data.
- O agente deve **citar** qual seção do CONTEXT está seguindo ao propor mudanças.

## 5. Primeira interação sugerida (roteiro para o agente)

Após ler este PRD, diga ao usuário algo como:

> “Vou montar a base do repositório. Para o CONTEXT ficar útil, preciso de você:  
> (1) Em uma frase, para que serve este repo agora?  
> (2) Você já usa Git/GitHub neste projeto ou começamos do zero?  
> (3) Há informação que **não** pode ir para arquivos versionados?”

Depois, crie a pasta `contexto/` (se ainda não existir) e os arquivos iniciais, em especial `contexto/CONTEXT.md`, com respostas incorporadas e lacunas explícitas.

## 6. Fora de escopo

- Substituir julgamento humano sobre legal/compliance.
- Preencher dados inventados para “parecer completo”.
- Criar automações ou código de produção **sem** o usuário pedir explicitamente.

## 7. Referência

Este PRD faz parte do pacote **Contextualize IA** (A3 Vision). Templates adicionais podem estar na pasta `cliente/templates/` do mesmo pacote (`TEMPLATE-CONTEXT.md`, etc.).

## 8. Se esta pasta for o pacote Contextualize IA (distribuição)

1. **Leia com prioridade** (antes de criar arquivos vivos): `cliente/templates/TEMPLATE-CONTEXT.md` e, se útil, `cliente/templates/CHECKLIST-SETUP.md` — use-os como base para o primeiro **`contexto/CONTEXT.md`** e para a árvore **dentro de `contexto/`**.
2. A pasta **`cliente/conteudo/`** é material **opcional** (aprofundamento, glossário, guia longo M0–M8). **Não** trate como lista obrigatória de entregas nem crie em `contexto/` uma cópia espelho de tudo que está em `cliente/conteudo/` **a menos que** o usuário peça explicitamente.
3. **`cliente/`**, **`home.html`** e o **README do produto** na raiz são **distribuição / landing** — **não** edite; a criação do manual do usuário é **só** em **`contexto/`**.
4. Arquivos **`cliente/app/`** (HTML, `landing.css`, `diagnostico*.json`, `download-config.js`) são interface no navegador — **não** recriar dentro de `contexto/`.
5. Se o usuário abriu **outro** repositório (vazio ou já existente) **sem** o pacote, aplique a mesma regra: tudo que você criar para o manual vivo vai em **`contexto/`** na raiz desse repo; use `TEMPLATE-CONTEXT` só se o usuário anexar ou colar o trecho.
6. **Explorador (opcional, humano):** o pacote pode incluir `cliente/app/explorador.html` e o script `cliente/scripts/gerar-estrutura-manifest.js`. Quem quiser ver `contexto/` no navegador roda o script e serve a pasta raiz com HTTP (ex.: `npx serve`); isso **não** é obrigatório para o fluxo PRD → agente.

**Nota:** o agente **não** “lê o repositório inteiro” automaticamente só por colar este PRD — depende do que está no contexto da sessão e das ferramentas da IDE. Por isso este PRD é auto-suficiente; os templates reforçam o resultado quando você os abre ou incorpora.
