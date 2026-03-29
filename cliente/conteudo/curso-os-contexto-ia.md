# Curso — seu repositório de contexto para agentes de IA

> **Não é o fluxo principal do pacote.** Quem quer ir direto ao ponto: abra **[../templates/PRD-BASE-AGENTE-IDE.md](../templates/PRD-BASE-AGENTE-IDE.md)**, cole no chat do agente com a pasta do projeto aberta, e siga as perguntas do assistente. **Este arquivo** é um **guia longo opcional** (M0–M8) para aprender passo a passo fora ou além desse atalho.

**Versão:** 1.3  
**Formato:** guia único em Markdown (módulos M0 a M8)  
**Pré-requisitos:** nenhum — saber criar pasta e arquivo no computador já basta.  
**Templates:** use a pasta [templates/](../templates/) junto com este documento.  
**Árvore viva:** o PRD base orienta a colocar o manual em **`contexto/`** na raiz do repositório; este guia usa essa convenção onde fala em `CONTEXT.md` e pastas irmãs.

**Prefere começar sem terminal ou IDE?** Leia antes [publico-e-acessibilidade.md](./publico-e-acessibilidade.md) (metáforas, medos comuns, **Trilha guiada** passo a passo).

---

## Duas formas de seguir

| Trilha | Perfil | O que usar |
|--------|--------|------------|
| **Guiada** | Usa IA no dia a dia; quer contexto organizado **fora** do chat; interface visual (GitHub Desktop / site) | GitHub + **GitHub Desktop** + Bloco de Notas / editor simples / **edição no site do GitHub**; chat de IA à parte (copiar trechos do CONTEXT) |
| **Profissional** | Quer o agente “dentro do projeto” e fluxo de quem já usa ferramentas de dev | Cursor, VS Code ou similar **abrindo a pasta** do repositório; terminal opcional |

> **Trilha guiada:** nos módulos abaixo, priorize os passos marcados para **Trilha guiada**. O restante é **Trilha profissional** (opcional) — mais poder, mais ferramentas.

---

## Como usar este curso

1. Leia o **M0** inteiro antes de instalar qualquer coisa.  
2. Siga a ordem **M1 → M2 → …** ou pule para o módulo indicado como *opcional*.  
3. Ao final de cada módulo, faça o **exercício** (15–30 min).  
4. **Projeto final:** repo privado com `contexto/CONTEXT.md` + `contexto/README.md` + `contexto/docs/prd.md` + pelo menos **uma decisão** em `contexto/decisoes/` ou nota datada (na **Trilha guiada**, “decisão” pode ser um parágrafo em `contexto/decisoes/minha-primeira-decisao.md`).

---

# M0 — Mentalidade: o que é “gestão de contexto”

### O problema

Modelos de IA **não guardam** o seu mundo entre sessões da forma que você precisa. Cada conversa pode parecer “nova” se você não injetar:

- quem você é e qual é o objetivo;  
- onde estão as regras (o que pode / não pode);  
- onde cada tipo de informação mora no disco.

Um **repositório de contexto** é uma **pastinha organizada** (no seu computador e na nuvem) cujo conteúdo principal é **texto**: regras, listas, decisões. Tecnicamente isso vive num projeto **Git**, mas você pode pensar como **“pasta que lembra o histórico”** — a colaboração com IA fica mais estável porque o **manual** não some quando o chat zera.

### O que não é

- Não é obrigatoriamente **código**.  
- Não é **backup** de tudo que você produz.  
- Não substitui **julgar** o que o modelo sugere.

### Exercício M0

Escreva em 5 linhas: *para que* você quer este repo agora (estudo, negócio, projeto). Guarde no bloco de notas — você vai colar no PRD.

---

# M1 — Ferramentas: o que instalar e por quê

## Trilha guiada — ordem sugerida (sem terminal)

1. Crie uma conta gratuita no **[GitHub](https://github.com)**.  
2. Crie um repositório **novo**, nome simples (ex.: `meu-contexto-ia`), **privado**, **sem** README automático (repositório vazio) ou **com** README — tanto faz; o importante é existir um lugar na nuvem.  
3. Instale o **[GitHub Desktop](https://desktop.github.com/)** (Windows ou Mac). Ele instala o **Git** por baixo dos panos — você não precisa “usar Git na mão”.  
4. No GitHub Desktop: **File → Clone repository** e escolha o repositório que criou → escolha uma pasta fácil (ex.: `Documentos/meu-contexto-ia`).  
5. Crie seus arquivos nessa pasta com **Bloco de Notas**, **Notepad++**, ou edite pelo **site do GitHub** (Add file → Create new file) se preferir **zero instalação** além do navegador.  
6. Para “salvar na nuvem” com GitHub Desktop: você verá as mudanças → escreva uma mensagem curta (ex.: “Primeiro CONTEXT”) → **Commit to main** → **Push origin**.

**Usar IA:** abra o ChatGPT (ou outro), e no **primeiro** prompt cole o conteúdo do seu `contexto/CONTEXT.md` (quando existir) ou diga: “Vou colar meu manual de regras na próxima mensagem.” Assim o contexto fica **próximo** (no arquivo que você vê) **e** no agente (na conversa).

---

## Trilha profissional (opcional) — com editor

Se quiser o assistente **dentro do projeto** lendo arquivos sozinho: instale **Cursor** ou **VS Code**, use **File → Open Folder** na pasta clonada. Ainda assim pode usar GitHub Desktop para commits, se quiser evitar terminal.

---

## 1.1 Git (o que é, em uma frase)

**Histórico de versões** dos seus arquivos — como “desfazer”, mas profissional. Na **Trilha guiada**, o GitHub Desktop cuida disso com botões.

**Só abra o terminal se quiser:** instalação manual em [Git for Windows](https://git-scm.com/download/win) (Windows), ou no Mac/Linux conforme ajuda do GitHub.

## 1.2 Conta e repositório remoto

**GitHub** (recomendado para começar): **New repository** — **privado** se houver dado pessoal ou de trabalho.

## 1.3 Editor com agente de IA (opcional)

- **Cursor** / **VS Code** — abrir a **pasta** do repositório.  
- Se não quiser: use **só o navegador** (GitHub) + **chat de IA** no celular ou outra aba.

## 1.4 Terminal — Trilha profissional (opcional)

<details>
<summary>Clique para ver comandos (opcional)</summary>

```text
git clone <url>          # baixar o repo pela primeira vez
git status               # ver o que mudou
git add .                # preparar tudo (cuidado com arquivos secretos)
git commit -m "mensagem" # registrar um ponto na história
git push                 # enviar para o remoto
```

</details>

### Exercício M1

**Trilha guiada:** (1) Conta GitHub + repo privado. (2) GitHub Desktop + clone na pasta Documentos. (3) Criar um arquivo `teste.txt` com uma frase, ver mudança no Desktop, Commit, Push. (4) Abrir o repo no site do GitHub e confirmar que o arquivo apareceu.

**Trilha profissional:** faça o mesmo e abra a pasta no Cursor/VS Code.

---

# M2 — Estrutura base de pastas

### Princípio

Comece **pequeno** dentro de **`contexto/`**: `CONTEXT.md`, `README.md`, `docs/`, e `.gitignore` na raiz do repo. Expanda quando doer (muitos arquivos na mesma pasta).

### Referência

Veja [templates/estrutura-pastas-minima.md](../templates/estrutura-pastas-minima.md).

### Convenções

- Nomes de arquivo em **kebab-case** (`minha-nota.md`).  
- Um **README** por pasta “importante” explicando o que há dentro.  
- Evite espaços e acentos em nomes de pasta se for usar terminal com frequência.

### Exercício M2

1. Na raiz do repo clonado, crie a pasta **`contexto/`** e dentro dela: `docs/`, `decisoes/`.  
2. Copie [templates/TEMPLATE-gitignore.txt](../templates/TEMPLATE-gitignore.txt) para `.gitignore` na raiz do repositório.  
3. Copie [templates/TEMPLATE-README-raiz.md](../templates/TEMPLATE-README-raiz.md) para `contexto/README.md` e ajuste o título.  
4. Commit: `docs: estrutura inicial e gitignore`.

---

# M3 — CONTEXT.md: o coração do método

### Função

`contexto/CONTEXT.md` é o **primeiro arquivo** que o agente deve ler. Ele concentra:

- regra zero (perguntar, não inventar);  
- mapa do repositório (onde gravar o quê);  
- limites (“não apague X sem autorização”).

### Como copiar

Use [templates/TEMPLATE-CONTEXT.md](../templates/TEMPLATE-CONTEXT.md): preencha placeholders, remova seções que não se aplicam.

### Dica de uso

Ao abrir o chat, use uma instrução fixa: *“Leia o arquivo contexto/CONTEXT.md antes de sugerir mudanças.”*

### Exercício M3

1. Crie `contexto/CONTEXT.md` a partir do template.  
2. Preencha pelo menos: **regra zero**, **mapa do repo** (3–5 linhas na tabela), **o que o agente não deve fazer**.  
3. Pergunte ao agente para resumir o CONTEXT em 5 linhas. Ajuste o texto se o resumo estiver errado.  
4. Commit: `docs: CONTEXT inicial`.

---

# M4 — PRD do repositório (uma página)

### Função

O **PRD** responde: *por que este repositório existe?* e *o que entra / não entra?* Evita virar “pasta de tudo”.

### Como copiar

[Templates/TEMPLATE-PRD-repo-contexto.md](../templates/TEMPLATE-PRD-repo-contexto.md) → salve como `contexto/docs/prd.md`.

### Exercício M4

1. Preencha objetivo, escopo e “não é”.  
2. Link no `contexto/README.md` apontando para `docs/prd.md`.  
3. Commit.

---

# M5 — Camadas: negócio, técnico, pessoal

### Ideia

No mesmo disco você pode ter **várias dimensões** da vida. Três camadas comuns:

| Camada | Exemplos de conteúdo | Onde guardar |
|--------|----------------------|--------------|
| Negócio / trabalho | proposta, ICP, processos | `contexto/negocio/`, `contexto/clientes/`, etc. |
| Técnico | stack, ADRs, decisões de tool | `contexto/decisoes/`, `contexto/docs/tecnico/` |
| Pessoal / estudo | plano de estudo, certificação | `contexto/pessoal/` ou outro repo separado |

**Regra:** se misturar tudo, o agente confunde prioridades. Separe **pastas** ou **repos** (alguns preferem dois repos: trabalho vs. pessoal).

### Exercício M5

Escolha **uma** camada que não existe ainda e crie uma pasta + README de uma linha **dentro de `contexto/`**. Atualize a tabela do `contexto/CONTEXT.md`.

---

# M6 — Dia a dia: rotina com o repositório

### Hábitos sugeridos

| Frequência | Ação |
|------------|------|
| Ao terminar sessão importante | `git status` → commit se mudou algo útil |
| Semanal | 10 min revisando se CONTEXT ainda está verdadeiro |
| Mensal | Arquivar ou apagar `inbox/`; revisar PRD |

### Mensagens de commit (docs)

Padrão legível:

- `docs: atualiza CONTEXT com regras de privacidade`  
- `decisoes: ADR-002 escolha de ferramenta X`

### Exercício M6

Faça **3 commits** em dias diferentes, mesmo que pequenos, descrevendo mudanças reais.

---

# M7 — Usabilidade: não virar cemitério de arquivo

### Boas práticas

- **Títulos** com `#` claros — facilita busca no editor.  
- **Links relativos** entre arquivos: `[texto](./docs/prd.md)`.  
- **Não versionar:** senhas, `.env`, exports com CPF; use `.gitignore`.  
- **Inbox:** uma pasta ou arquivo `inbox.md` para triagem semanal.

### Exercício M7

1. Use `git status` e confirme que **não** há arquivos sensíveis listados.  
2. Ajuste `.gitignore` se necessário.  
3. Liste no CONTEXT uma linha “**O que nunca commitar**”.

---

# M8 — Avançado: ADRs, regras do editor, branches

### ADR (Architecture Decision Record)

Decisões que você não quer “reabrir” sem motivo: **uma decisão** por arquivo em `contexto/decisoes/`. Modelo: [templates/TEMPLATE-ADR-001-exemplo.md](../templates/TEMPLATE-ADR-001-exemplo.md).

### Regras do Cursor / VS Code

Se usar `.cursor/rules` ou `.vscode/settings.json`, documente no CONTEXT: *“regras automáticas ficam em …”*.

### Branches (opcional)

Para experimentos grandes: `git checkout -b experimento/nova-estrutura` — merge quando estiver satisfeito.

### Exercício M8

Registre **uma** decisão real (mesmo pequena) em `contexto/decisoes/ADR-001-algo.md` usando o template.

---

## Projeto final (entrega)

Entregue (para você mesmo ou para um mentor):

1. Repositório **privado** no Git com histórico de commits.  
2. `contexto/CONTEXT.md` preenchido e testado com o agente.  
3. `contexto/README.md` com índice.  
4. `contexto/docs/prd.md` completo.  
5. Pelo menos **uma** decisão em `contexto/decisoes/` ou nota datada.  
6. `.gitignore` adequado na raiz do repositório.

---

## Próximos passos

- Aprofundar **só** o módulo que mais doeu (ex.: Git, ou estrutura de negócio).  
- Duplicar o modelo para **outro** projeto (novo repo cloneado do template mental).  
- Ver [problemas-comuns.md](./problemas-comuns.md) se travar.  
- Dúvida de termos: [glossario-acessivel.md](./glossario-acessivel.md).

---

## Uso e distribuição deste material

Quem **revender** o pacote deve definir licença, garantias e suporte no próprio produto. Para uso **interno da organização** que produziu o kit, seguir a política interna vigente.
