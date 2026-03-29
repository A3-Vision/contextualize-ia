# Problemas comuns — troubleshooting

Referência **opcional** para quem segue o guia em [curso-os-contexto-ia.md](./curso-os-contexto-ia.md) ou já tem repositório; não substitui o fluxo **[PRD base](../templates/PRD-BASE-AGENTE-IDE.md)** na IDE.

## Trilha guiada (GitHub Desktop)

**“Não aparece o botão Push.”**  
→ Faça **Commit** primeiro (mensagem obrigatória). Depois **Push origin**.

**“Não sei onde está a pasta no PC.”**  
→ No GitHub Desktop: **Repository → Show in Explorer** (ou equivalente no Mac).

## Git

**“Não sei se commitou certo.”**  
→ `git status` e `git log --oneline -5`. Se algo errado entrou no último commit: `git reset --soft HEAD~1` (desfaz commit mantendo arquivos; use com cuidado).

**“Subi arquivo secreto.”**  
→ Remova do histórico com ferramentas adequadas (ex.: `git filter-repo`) ou troque o segredo no serviço (nova chave). Prevenção: `.gitignore` antes do primeiro `git add`.

## Agente de IA

**“O agente ignora o CONTEXT.”**  
→ Coloque a instrução no **primeiro** turno: “Leia CONTEXT.md e confirme que leu.” Encurte o CONTEXT se passar de ~2–3 telas.

**“O agente inventou fato.”**  
→ Reforce no CONTEXT: “Não inventar [preços, datas, nomes de cliente]. Perguntar.”

## Organização

**“Repo virou bagunça.”**  
→ Pausa de 30 min: uma pasta `inbox/` ou `arquivo/`, mover tudo não classificado, triar na sexta. Atualize só o README e o CONTEXT.

**“Muitas pastas vazias.”**  
→ Apague pastas vazias ou coloque um `README.md` com “reservado para…”. Menos é mais no início.

## Ferramentas

**“Cursor não abre a pasta.”**  
→ File → Open Folder → escolha a raiz do clone (onde está `.git`).

---

Sugestão: acrescente **problemas reais** que você ou seus alunos encontrarem — este arquivo deve crescer com o produto.
