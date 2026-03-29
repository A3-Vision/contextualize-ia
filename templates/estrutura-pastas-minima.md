# Estrutura mínima de pastas (referência)

Use como ponto de partida. **Expanda** quando uma pasta começar a ficar cheia; **não** crie dez pastas vazias no dia 1.

## Árvore sugerida (pessoa solo / projeto único)

```
meu-contexto-ia/
├── .gitignore
├── README.md                 ← índice humano
├── CONTEXT.md                ← briefing para o agente (obrigatório neste método)
├── docs/
│   ├── prd.md                ← por que o repo existe
│   └── notas/                ← opcional: ideias longas
├── decisoes/
│   └── README.md             ← uma linha: “uma decisão por arquivo, nome YYYY-MM-DD-assunto.md”
└── inbox/                    ← opcional: arquivo solto antes de classificar
```

## Variações por perfil

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

**Um arquivo novo = um lugar óbvio.** Se não for óbvio, crie uma linha na tabela do `CONTEXT.md` explicando a pasta.
