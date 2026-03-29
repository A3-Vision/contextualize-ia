# Scripts do pacote

## `gerar-estrutura-manifest.js`

Varre a pasta **`contexto/`** (na raiz do pacote, ao lado de `cliente/`) e grava **`cliente/app/estrutura-manifest.json`**, usado pela página **`cliente/app/explorador.html`** para montar a árvore de pastas e arquivos.

**Comando** (execute na raiz do repositório `contextualize-ia`):

```bash
node cliente/scripts/gerar-estrutura-manifest.js
```

Rode sempre que o agente (ou você) criar, renomear ou apagar algo em `contexto/`.

**Pré-requisito:** Node.js instalado (qualquer versão LTS recente).
