# Checklist — do zero ao primeiro uso

Marque conforme avança. Tempo estimado: **1–3 horas** na primeira vez.

**Trilha guiada (recomendada):** siga a coluna **Guiada**. **Trilha profissional:** coluna à direita — para quem já usa editor com agente e/ou terminal.

---

## Antes de criar o repositório

- [ ] Defini **para que** é este contexto (trabalho, estudo, negócio, projeto lateral).  
- [ ] Escolhi **um nome** claro para o repo (ex.: `meu-contexto-2026`).  
- [ ] Decidi se será **só meu** ou **equipe** (afeta privacidade).

---

## Ferramentas

| Passo | Guiada | Profissional |
|-------|--------|--------------|
| Conta no GitHub | [ ] Criei conta | [ ] |
| Git no PC | [ ] Instalei **GitHub Desktop** (instala o Git automaticamente) | [ ] Instalei Git e uso terminal |
| Onde editar arquivos | [ ] Bloco de Notas / editor simples **ou** site do GitHub | [ ] Cursor / VS Code |
| IA | [ ] ChatGPT ou outro — vou **colar** trechos do CONTEXT no início | [ ] Agente no editor com pasta aberta |

---

## Criar o repositório

- [ ] Repo **privado** criado no GitHub (site).  
- [ ] **Guiada:** no GitHub Desktop → **Clone** do repo para pasta fácil (ex.: `Documentos/meu-contexto`).  
- [ ] **Profissional:** `git clone` no terminal.  
- [ ] Copiei **TEMPLATE-gitignore** → `.gitignore` na raiz do repositório.  
- [ ] Criei a pasta **`contexto/`** na raiz (se ainda não existir).  
- [ ] Copiei **TEMPLATE-README-raiz** → `contexto/README.md` (ajustei título).  
- [ ] Copiei **TEMPLATE-CONTEXT** → `contexto/CONTEXT.md` (preenchi nome e regras mínimas).  
- [ ] Criei `contexto/docs/` e coloquei **TEMPLATE-PRD** como `contexto/docs/prd.md`.  
- [ ] **Guiada:** no GitHub Desktop — selecionar mudanças → **Summary** (mensagem) → **Commit** → **Push**.  
- [ ] **Profissional:** `git add` → `git commit` → `git push`.

---

## Primeiro uso com IA

- [ ] **Guiada:** abri o arquivo `contexto/CONTEXT.md` no computador, copiei o texto e colei no **primeiro** prompt do chat (“Estas são as regras do meu projeto…”).  
- [ ] **Profissional:** abri a **pasta** no Cursor/VS Code e pedi ao agente para ler `contexto/CONTEXT.md`.  
- [ ] Ajustei o CONTEXT se a resposta não bateu com o que eu quero.  
- [ ] Salvei e fiz **segundo commit/push** (GitHub Desktop ou terminal).

---

## Primeira semana

- [ ] Usei o repositório em **pelo menos 3 dias** (mesmo que 5 minutos).  
- [ ] Atualizei CONTEXT ou docs quando algo mudou.  
- [ ] Confirmei que **não** subi senha nem `.env` (ver `.gitignore`).

---

Quando a seção “Primeiro uso com IA” estiver ok, você já tem o **mínimo viável** de gestão de contexto.
