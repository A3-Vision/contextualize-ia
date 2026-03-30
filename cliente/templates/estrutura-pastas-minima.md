# Estrutura mínima de pastas (referência)

Use como ponto de partida. **Expanda** quando uma pasta começar a ficar cheia; **não** crie dez pastas vazias no dia 1.

**Convenção do PRD base:** o manual vivo fica na pasta **`contexto/`** na raiz do repositório. A árvore abaixo é **dentro de `contexto/`** (exceto `.gitignore`, que fica na raiz do repo).

## Árvore sugerida (pessoa solo / projeto único)

```
meu-repo/
├── .gitignore                 ← na raiz do Git (cobre todo o repositório)
├── contexto/
│   ├── README.md              ← índice humano
│   ├── CONTEXT.md             ← briefing para o agente (obrigatório neste método)
│   ├── docs/
│   │   ├── prd.md             ← por que o repo existe
│   │   └── notas/             ← opcional: ideias longas
│   ├── decisoes/
│   │   └── README.md          ← uma linha: “uma decisão por arquivo, nome YYYY-MM-DD-assunto.md”
│   └── inbox/                 ← opcional: arquivo solto antes de classificar
```

**Se** o mesmo repositório contiver o pacote Contextualize IA, podem existir também na raiz (somente referência; o agente não edita): `cliente/`, `index.html` (Python HTTP), `serve.json` (`npx serve`), `home.html`, `README.md`, `README-CONTEXTUALIZA-IA.md`.

## Variações por perfil

*(Todas as pastas abaixo ficam **dentro de `contexto/`** quando aplicável.)*

### Estudante / certificação

- `docs/plano-de-estudos.md`  
- `docs/materiais/` *(links ou resumos, não PDFs gigantes no Git se não precisar)*  

### Freelancer / consultor

- `clientes/` com `_template/` e uma pasta por cliente **sem dados sensíveis**  
- ou só `projetos/2026-nome-do-projeto/` se preferir por ano  

### Pequeno negócio

- `empresa/` visão e modelo  
- `operacoes/` processos  
- `vendas/` ou `marketing/` conforme prioridade  

## Regra de ouro

**Um arquivo novo = um lugar óbvio dentro de `contexto/`.** Se não for óbvio, crie uma linha na tabela do `CONTEXT.md` explicando a pasta.
