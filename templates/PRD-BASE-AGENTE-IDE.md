# PRD — Contextualize IA (instruções para o agente da IDE)

**Cole este arquivo inteiro no chat do agente** (Cursor, VS Code + Copilot, Antigravity, etc.) com a pasta do projeto **já aberta** no editor. O produto Contextualize IA entrega **esta base**; o repositório que você criar será **seu** e deve refletir **sua** necessidade — não um template rígido.

---

## 1. Objetivo

Criar ou reorganizar um **repositório de contexto para IA**: pastas e arquivos em Markdown versionáveis (Git), onde o arquivo central é um **`CONTEXT.md` vivo** — isto é, o agente **atualiza** esse arquivo conforme você responde perguntas e o projeto evolui.

## 2. O que você (agente) deve fazer

1. **Não inventar** dados sobre o usuário, negócio, prazos ou terceiros. O que não estiver escrito, **pergunte**.
2. **Antes** de criar dezenas de arquivos, faça **2 a 5 perguntas** para entender: finalidade do repo, nível de conforto com Git/terminal, e se há dados sensíveis a evitar no versionamento.
3. Propor uma **estrutura mínima viável** (poucas pastas) e **expandir só quando fizer sentido** para o domínio do usuário.
4. Criar um **`CONTEXT.md` inicial** a partir do template mental abaixo, com seções claras e campos `<!-- preencher com o usuário -->` ou listas de “perguntas pendentes”.
5. Definir um **ritual**: em novas sessões, o agente **lê o CONTEXT.md primeiro** e propõe atualizações quando o usuário mudar de ideia ou de escopo.
6. Garantir **`.gitignore`** adequado (ex.: `.env`, segredos, caches de IDE se aplicável).

## 3. Estrutura sugerida (ajuste ao que o usuário precisar)

```
[raiz]/
  README.md          ← índice humano; link para CONTEXT e docs
  CONTEXT.md         ← manual vivo para o agente + mapa do repo
  docs/
    prd.md           ← PRD de uma página deste repositório (opcional)
  decisoes/          ← notas ou ADRs quando houver decisão importante
  .gitignore
```

Pastas extras (ex.: `negocio/`, `pessoal/`, `clientes/`) só se o usuário confirmar que precisa.

## 4. CONTEXT.md vivo — regras

- O CONTEXT não é texto estático para sempre: deve ter seção **“Perguntas em aberto”** ou **“Última conversa / próximos passos”** que o agente atualiza.
- Toda alteração relevante de regra deve **refletir no CONTEXT** ou em `decisoes/` com data.
- O agente deve **citar** qual seção do CONTEXT está seguindo ao propor mudanças.

## 5. Primeira interação sugerida (roteiro para o agente)

Após ler este PRD, diga ao usuário algo como:

> “Vou montar a base do repositório. Para o CONTEXT ficar útil, preciso de você:  
> (1) Em uma frase, para que serve este repo agora?  
> (2) Você já usa Git/GitHub neste projeto ou começamos do zero?  
> (3) Há informação que **não** pode ir para arquivos versionados?”

Depois, crie os arquivos e o primeiro `CONTEXT.md` com respostas incorporadas e lacunas explícitas.

## 6. Fora de escopo

- Substituir julgamento humano sobre legal/compliance.
- Preencher dados inventados para “parecer completo”.
- Criar automações ou código de produção **sem** o usuário pedir explicitamente.

## 7. Referência

Este PRD faz parte do pacote **Contextualize IA** (A3 Vision). Templates adicionais podem estar na pasta `templates/` do mesmo pacote (`TEMPLATE-CONTEXT.md`, etc.).

## 8. Se esta pasta for o pacote Contextualize IA (distribuição)

1. **Leia com prioridade** (antes de criar arquivos no repo do usuário): `templates/TEMPLATE-CONTEXT.md` e, se útil, `templates/CHECKLIST-SETUP.md` — use-os como base para o primeiro `CONTEXT.md` e estrutura.
2. A pasta **`conteudo/`** é material **opcional** (aprofundamento, glossário, guia longo M0–M8). **Não** trate como lista obrigatória de entregas nem crie no repo do usuário uma cópia espelho de tudo que está em `conteudo/` **a menos que** o usuário peça explicitamente.
3. Arquivos **`app/`** (HTML, `landing.css`, `diagnostico*.json`, `download-config.js`), **`home.html`** são a interface do pacote no navegador — **não** precisam ser recriados no repositório de contexto do usuário.
4. Se o usuário abriu **outra pasta** (repo vazio ou já existente), ignore a árvore do pacote e siga as seções 1–6; use só `templates/` como referência se estiverem acessíveis no workspace.

**Nota:** o agente **não** “lê o repositório inteiro” automaticamente só por colar este PRD — depende do que está no contexto da sessão e das ferramentas da IDE. Por isso este PRD é auto-suficiente; os templates reforçam o resultado quando você os abre ou incorpora.
