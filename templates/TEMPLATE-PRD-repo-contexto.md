# PRD — Repositório de contexto para agentes de IA

## [NOME DO PROJETO / REPOSITÓRIO]

**Versão:** 0.1  
**Data:** YYYY-MM-DD  
**Autor:** [nome]

---

## 1. Objetivo

Criar e manter um repositório Git contendo **documentação em Markdown** que sirva de **contexto persistente** para agentes de IA (Cursor, Claude Code, Copilot, etc.) no dia a dia do autor.

**Problema que resolve:** [ex.: perder tempo reexplicando o mesmo contexto a cada conversa; decisões espalhadas; falta de “fonte da verdade” para o agente]

**Resultado esperado:** [ex.: abrir o editor, citar CONTEXT.md, e o agente já sabe regras, estrutura e limites]

---

## 2. Escopo

### Este repositório **é**

- [ ] Texto (principalmente `.md`) versionado  
- [ ] Regras e mapa mental para agentes  
- [ ] Histórico de decisões relevantes  
- [ ] Opcional: templates reutilizáveis  

### Este repositório **não é**

- [ ] Código de produção do produto final (se houver, fica em outro repo)  
- [ ] Armazenamento de segredos (`.env`, senhas, tokens)  
- [ ] Dump ilimitado de arquivos binários pesados  

---

## 3. Requisitos técnicos

| Requisito | Detalhe |
|-----------|---------|
| Controle de versão | Git + remoto (GitHub, GitLab, etc.) |
| Formato principal | Markdown (`.md`) |
| Nomenclatura | `kebab-case` para arquivos e pastas |
| Privacidade | Repositório **privado** se houver dados sensíveis |
| `.gitignore` | Excluir `.env`, chaves, pastas locais de cache do editor |

---

## 4. Estrutura de diretórios (mínimo)

Ajuste à sua realidade. Exemplo genérico:

```
[nome-do-repo]/
├── README.md
├── CONTEXT.md
├── .gitignore
├── docs/
│   └── prd.md              ← pode ser cópia deste PRD
├── decisoes/               ← ou adr/
└── [suas pastas]/
```

---

## 5. Usabilidade humana

- **README na raiz:** índice com links para CONTEXT, docs principais e como colaborar (mesmo que só você).  
- **Busca:** usar busca do editor por palavra-chave; manter títulos `#` claros.  
- **Commits:** mensagens curtas e legíveis, ex.: `docs: atualiza CONTEXT com regras de privacidade`.

---

## 6. Usabilidade com agentes de IA

- **Arquivo âncora:** `CONTEXT.md` na raiz (ou caminho que você sempre informar na sessão).  
- **Instrução fixa:** “Leia CONTEXT.md antes de propor mudanças.”  
- **Escopo:** delimitar pastas que o agente pode editar sozinho vs. pastas que exigem confirmação humana.

---

## 7. Critérios de sucesso

| Critério | Como medir |
|----------|------------|
| Ex.: CONTEXT existe e está atualizado | Revisão semanal |
| Ex.: Nenhum segredo no histórico Git | Auditoria ocasional do `.gitignore` e arquivos rastreados |
| Ex.: Você usa o repo pelo menos X vezes por semana | Hábito + commits |

---

## 8. Riscos e mitigação

| Risco | Mitigação |
|-------|-----------|
| Repo vira bagunça | Revisão mensal; uma pasta “arquivo” ou `inbox/` com triagem |
| Excesso de confiança no agente | CONTEXT com “o que não fazer”; revisão humana antes de commit crítico |

---

## 9. Próximos passos após aprovar este PRD

1. Criar repo remoto privado  
2. Copiar templates de CONTEXT e README  
3. Primeiro commit: `docs: estrutura inicial e PRD`
