> **Documento interno (A3 Vision)** — roadmap de produto, precificação e canal. **Não** faz parte do método que o usuário final segue ao usar o pacote. O núcleo do produto para o cliente é **`templates/PRD-BASE-AGENTE-IDE.md`** + templates; o restante é opcional (ver [README.md](./README.md) desta pasta e [README.md](../README.md) do produto).

# Plano de ação — criação do produto “Contextualize IA”

Objetivo: entregar um **produto vendável** cujo **núcleo** é **PRD + templates** (fluxo “colar na IDE → agente monta `CONTEXT.md` vivo”) e, em paralelo, **material pedagógico opcional** em `conteudo/` para quem quiser aprofundar além desse fluxo mínimo.

## Estado atual (v1 interna)

| Fase | Status |
|------|--------|
| Fase 3 — Pacote de templates | **Feito** — ver [templates/README.md](../templates/README.md) |
| Fase 4 — Redação do guia longo (M0–M8) | **Feito** — [curso-os-contexto-ia.md](./curso-os-contexto-ia.md) + [problemas-comuns.md](./problemas-comuns.md) (opcional para o usuário) |
| Fase 0 — ICP e promessa comercial | Parcial — ver [publico-e-acessibilidade.md](./publico-e-acessibilidade.md); fechar no [README.md](../README.md) quando houver oferta pública |
| Fase 5 — Embalagem e canal (HTML de entrada, ZIP, FAQ, oferta) | Parcial — `index.html`, `app/`, `diagnostico`, README do produto; pendente ZIP público estável, FAQ comercial, precificação no canal escolhido |
| Fase 6 — Piloto externo | Pendente |

---

## Fase 0 — Clareza de produto (1–3 dias)

| Entrega | Descrição |
|---------|-----------|
| ICP do produto | Quem compra: solo creator, dev, consultor, microempresa? (pode ser 1 primário + 1 secundário) |
| Promessa única | Uma frase: ex. “Do zero ao seu CONTEXT.md funcionando em um fim de semana” |
| Formato de venda | Só Markdown + repo? Pack + vídeo? Comunidade? Atualizar preço alvo em [../../../../../financeiro/precificacao.md](../../../../../financeiro/precificacao.md) se for linha própria |
| Critério de “pronto” | Checklist objetivo: o aluno consegue X, Y, Z |

**Saída:** parágrafo de posicionamento + escopo “in / out” no README desta pasta.

---

## Fase 1 — Inventário do que já temos (½–1 dia)

| Ação | Notas |
|------|--------|
| Listar artefatos reutilizáveis | CONTEXT, PRD, ADR, mapa de pastas, templates de cliente |
| Separar **genérico** vs **A3 Vision** | O que vira template neutro (placeholders `[SUA EMPRESA]`) |
| Definir “mínimo viável” | 5 arquivos + 5 pastas que não podem faltar |

**Saída:** tabela “origem → template do curso”.

---

## Fase 2 — Arquitetura pedagógica (2–4 dias)

| Módulo sugerido | Conteúdo |
|-----------------|-----------|
| M0 — Mentalidade | Por que Git + Markdown + CONTEXT; o que é “gestão de contexto” |
| M1 — Ferramentas | Git, GitHub/GitLab, Cursor ou VS Code, extensões úteis; criar repo privado |
| M2 — Estrutura base | Árvore de pastas genérica; convenções (kebab-case, README em cada raiz) |
| M3 — CONTEXT.md | Papel do “briefing master”; seções mínimas; como o agente deve ler |
| M4 — PRD leve | Template copiável; quando usar “épico” vs “1 página” |
| M5 — Camadas | Negócio / técnico / operação / pessoal — como não misturar tudo |
| M6 — Dia a dia | Workflow: segunda = atualizar pipeline; sexta = revisão; commits semânticos para docs |
| M7 — Usabilidade | Como não virar cemitério de arquivo; busca; links internos; o que não versionar |
| M8 — Avançado (opcional) | ADRs, branches, módulos por projeto, integração com Cursor Rules |

**Saída:** sumário do curso com objetivos de aprendizagem por módulo.

---

## Fase 3 — Pacote de templates (3–5 dias)

| Arquivo | Função |
|---------|--------|
| `TEMPLATE-CONTEXT.md` | Placeholders para identidade, regras do agente, mapa de pastas |
| `TEMPLATE-PRD-repo-contexto.md` | PRD de 1 página para o próprio repo |
| `README-inicial.md` | Índice do repositório pessoal/empresa |
| `estrutura-pastas-minima/` | Lista ou script `tree` documentado |
| `.gitignore` sugerido | `.env`, segredos, pastas locais de agente |
| `CHECKLIST-SETUP.md` | Do primeiro clone ao primeiro commit |

**Saída:** pasta `templates/` dentro deste produto (ou `pacote/`).

---

## Fase 4 — Redação do curso (guia único ou módulos) (1–2 semanas)

| Etapa | Detalhe |
|-------|---------|
| Rascunho | Um único `curso-os-contexto-ia.md` com todas as seções |
| Revisão | Cortar jargão A3 Vision; exemplos neutros (ex.: “consultoria”, “app”, “conteúdo”) |
| Exercícios | “Faça você mesmo” ao fim de cada módulo (1 tarefa concreta) |
| Ponto final | Definir “projeto final”: ex. repo com CONTEXT + 3 pastas preenchidas + 1 ADR |

**Saída:** arquivo(s) do curso prontos para exportação (PDF opcional depois).

---

## Fase 5 — Embalagem e canal (paralelo ou após Fase 4)

| Item | Descrição |
|------|-----------|
| Entrada do produto | Página de boas-vindas + instruções (`index.html`, `app/`); diagnóstico opcional; quando houver venda: problema, para quem, o que entra, preço, garantia |
| FAQ | “Preciso saber programar?” “Funciona só com Cursor?” |
| Política | Suporte por e-mail / comunidade / limites |
| Distribuição | ZIP ou repo público; `download-config.js` com URL estável |

---

## Fase 6 — Piloto e iteração

- 2–3 pessoas **fora** do time seguem o guia com **observação de fricção** (onde travou).  
- Ajustar ordem, templates e uma seção “problemas comuns”.

---

## Ordem recomendada (resumo)

1. Fase 0 → 1 → 2 (definição + inventário + arquitetura)  
2. Fase 3 (templates) **em paralelo** ao início da Fase 4  
3. Fase 4 redação completa  
4. Fase 5 embalagem + Fase 6 piloto  

---

## Próximo passo imediato (esta semana)

1. **ICP + promessa** — parcialmente em [publico-e-acessibilidade.md](./publico-e-acessibilidade.md); alinhar parágrafo único no [README.md](../README.md) quando a oferta pública fechar.  
2. **Núcleo PRD** — mantido em [templates/PRD-BASE-AGENTE-IDE.md](../templates/PRD-BASE-AGENTE-IDE.md); evoluir com piloto (tempo até estrutura útil, fricção de perguntas).  
3. **Opcional:** vídeo curto e página “comece em 15 min” (ver acessibilidade); **piloto** com 2–3 pessoas (trilha guiada e/ou só PRD na IDE).

---

## Responsáveis

| Papel | Responsabilidade |
|-------|------------------|
| Owner do produto | Priorizar escopo e “pronto” |
| Redator | Curso + templates genéricos |
| Revisor | Testar com repo limpo em máquina nova (virtual ou segunda conta) |

*(Preencher nomes internamente.)*
