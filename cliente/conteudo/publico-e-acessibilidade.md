# Público-alvo e acessibilidade (uso “do dia a dia”)

Material de apoio **opcional** (leitura humana). O **método mínimo** do produto é colar o **[PRD base](../templates/PRD-BASE-AGENTE-IDE.md)** no agente da IDE; este documento ajuda quem prefere contexto pedagógico ou **Trilha guiada** sem depender só do chat.

## Quem tende a usar

Pessoas que **já usam IA** (ChatGPT, Copilot no Edge, app no celular, etc.) e querem:

- **Lembrar menos** — o assistente “sabe” regras e prioridades que estão escritas em arquivo, não só na última conversa.  
- **Ter o contexto perto** — em pastas que **elas enxergam** (Explorador de Arquivos, site do GitHub), não só dentro do chat do agente.  
- **Automatizar rotinas** com mais segurança — porque há um “manual” (`CONTEXT.md`) dizendo o que pode e o que não pode.  

**Trilha profissional:** desenvolvedores e quem já usa terminal podem pular a parte visual e ir direto ao fluxo com editor e Git na linha de comando.

**Também serve:** autônomos, gestores, criadores de conteúdo, estudantes — qualquer um organizando **vida, trabalho ou projeto** com apoio de IA.

---

## O que assusta (e como vamos contornar)

| Medo comum | O que fazemos no material |
|------------|---------------------------|
| “Não sei usar IDE / VS Code” | **Trilha guiada:** pasta no computador + **GitHub Desktop** (botões) ou até **só o site do GitHub** para editar arquivos. IDE vira *opcional*. |
| “Terminal assusta” | Comandos de terminal ficam em **caixa opcional**. Na **Trilha guiada** quase não é preciso abrir terminal. |
| “Git é complicado” | Explicamos como **histórico de versões** (como “desfazer” no Word, mas para pastas). Um botão **Commit** e **Push** no GitHub Desktop substitui 90% dos comandos. |
| “Markdown é estranho” | É **texto com títulos**: `#` = título grande, lista com `-`. Qualquer um aprende em 10 minutos — igual anotação no celular. |
| “Quero coisa visual” | Pastas no Explorador **são** visuais; no GitHub, a **árvore de arquivos** também. Sugerimos **print** ou vídeo curto mostrando só isso (entrega futura do produto). |

---

## Metáforas (para explicar sem jargão)

| Termo técnico | Metáfora |
|---------------|----------|
| Repositório | Uma **gaveteiro com etiquetas** — tudo que importa para aquele assunto num só lugar. |
| `CONTEXT.md` | **Bilhete na porta da geladeira** — “quem mora aqui, o que pode mexer, onde está cada coisa”. O agente lê isso primeiro. |
| Commit | **Foto** do estado dos arquivos naquele dia — você pode voltar. |
| Git / nuvem | **Cópia na nuvem** — se o PC quebrar, o texto não some. |
| Agente de IA | **Assistente** que precisa do manual (`CONTEXT`) para não inventar regra. |

---

## Duas trilhas no mesmo curso

1. **Trilha guiada (recomendada para começar)**  
   - Conta no GitHub → criar repositório **privado**.  
   - Instalar **GitHub Desktop** → clonar o repo na pasta `Documentos` (ou outra que você ache fácil).  
   - Criar/editar arquivos com **Bloco de Notas**, **Word** (salvar como `.txt` e renomear para `.md` com cuidado) ou **Obsidian** / **Typora** se quiser mais bonito — **ou** editar direto no **navegador** no GitHub (Add file).  
   - Chat de IA: **ChatGPT / Copilot / outro** — você **copia e cola** trechos do `CONTEXT.md` no início da conversa, *ou* usa um app que leia pasta (quando existir).  
   - **Sem obrigatoriedade** de Cursor/VS Code.

2. **Trilha profissional (editor + agente no projeto)**  
   - Cursor / VS Code abrindo a **pasta** do repositório — para quem quiser o agente “vendo” os arquivos automaticamente e, se quiser, terminal.

O arquivo [curso-os-contexto-ia.md](./curso-os-contexto-ia.md) detalha os passos da **Trilha guiada** (sem terminal obrigatório) e da **Trilha profissional** (opcional).

---

## Como facilitar ainda mais (roadmap do produto)

| Ideia | Para quê |
|-------|----------|
| **Vídeo curto (5 min)** só mostrando: criar repo → pasta no PC → primeiro arquivo | Reduz ansiedade inicial. |
| **PDF** do checklist com prints em branco “cole seu print aqui” | Acompanhamento de quem compra suporte. |
| **Uma página “comece em 15 min”** | Só: criar `CONTEXT.md` vazio + 3 regras + salvar no GitHub pela web. |
| **Glossário de 1 página** | PRD, commit, repositório — em linguagem de escola. |
| **Versão “só nuvem”** | Tudo editado no GitHub web; sem instalar nada no PC (mais limitado, porém possível). |

---

## Resumo

O produto **não exige** que a pessoa vire desenvolvedora. Exige **organização em texto** e **um hábito**: guardar regras e contexto num lugar fixo que a IA (e você) possam reler. Terminal, IDE e ADRs entram na **Trilha profissional**, quando fizer sentido.
