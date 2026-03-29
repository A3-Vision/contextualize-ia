# CONTEXT.md — [NOME DO SEU PROJETO OU ORGANIZAÇÃO]

## Manual para o agente de IA — leitura obrigatória
### Atualizado em: YYYY-MM-DD

### CONTEXT vivo (Contextualize IA)

Este arquivo **não é estático para sempre**: quando você responder perguntas do agente ou mudar regras, o agente **atualiza** as seções correspondentes. Mantenha uma área **“Perguntas em aberto”** ou **“Última conversa”** (abaixo) para o que ainda falta decidir.

Este repositório é **[descreva em uma linha: ex. “só documentação e decisões”, “meu segundo cérebro”, “contexto do meu negócio”]**. **Não é** [o que não é: ex. código de produção, backup de fotos, banco de dados].

**Regra zero:** em toda sessão com agente de IA, **ler este arquivo primeiro** (ou o trecho que o humano indicar). Se faltar decisão que só o humano pode tomar — **perguntar**; não inventar fatos, números, prazos ou promessas a terceiros.

---

## Perguntas em aberto / próxima conversa

- [ ] [O que o agente ainda precisa que você esclareça]  
- [ ] […]

---

**Documentos de apoio (opcional):** [listar links relativos, ex. `./docs/prd.md`, `./docs/identidade.md`]

---

## 1. O que é [nome] (resumo em 5–8 linhas)

[Quem você é / o que este contexto representa. O que o agente precisa “saber” para ajudar de verdade.]

---

## 2. Para quem / para quê (se aplicável)

- **Público ou foco:** [ex.: meu negócio de consultoria; meu estudo de certificação; minha equipe de dois]  
- **Não é foco:** [o que você não quer que o agente assuma como objetivo]

---

## 3. Princípios ou regras de decisão

1. [Ex.: Clareza antes de volume — não criar 10 pastas vazias]  
2. [Ex.: Dado sensível não entra no Git]  
3. [Ex.: Toda decisão importante vira ADR ou nota datada]  
4. [Adicione ou remova conforme seu momento]

---

## 4. Mapa do repositório — onde gravar o quê

| Pasta ou arquivo | Uso |
|------------------|-----|
| `README.md` | Índice humano; primeiro contato com o repo |
| `CONTEXT.md` | Este arquivo — regras do agente e mapa mental |
| `docs/` | PRDs, especificações, identidade estendida |
| `decisoes/` ou `adr/` | Decisões com data (formato livre ou ADR) |
| *[adicione suas pastas]* | *[descrição]* |

> Ajuste a tabela ao seu domínio. Menos pastas bem usadas > muitas pastas vazias.

---

## 5. Protocolos recorrentes

### Ao iniciar um novo tópico grande

1. [Ex.: criar arquivo em `docs/` com nome `kebab-case`]  
2. [Ex.: linkar no README]  

### Ao usar o agente para gerar conteúdo

1. [Ex.: colar apenas trechos necessários; não colar senhas]  
2. [Ex.: revisar antes de commitar]  

---

## 6. Stack ou ferramentas (se houver)

| Tema | Escolha | Onde está documentado |
|------|---------|------------------------|
| Editor / agente | Cursor, VS Code, etc. | — |
| Repositório remoto | GitHub / GitLab / outro | — |

---

## 7. O que o agente **não** deve fazer

- Não inventar [preços, prazos legais, dados de terceiros — personalize].  
- Não apagar pastas template sem instrução explícita.  
- [Suas regras]

---

## 8. Glossário (opcional)

| Termo | Significado |
|-------|-------------|
| CONTEXT | Este briefing mestre para IA |
| ADR | Architecture Decision Record — registro curto de decisão |

---

> Personalize seções. O objetivo é **uma página** que qualquer sessão nova possa carregar e alinhar o agente em minutos.
