/**
 * Gera cliente/app/estrutura-manifest.json a partir da pasta contexto/ na raiz do pacote.
 * Uso (na raiz do repositório contextualize-ia): node cliente/scripts/gerar-estrutura-manifest.js
 */
const fs = require('fs');
const path = require('path');

const packageRoot = path.join(__dirname, '..', '..');
const contextoDir = path.join(packageRoot, 'contexto');
const outFile = path.join(packageRoot, 'cliente', 'app', 'estrutura-manifest.json');

function walk(dir, baseRel) {
  const children = [];
  if (!fs.existsSync(dir)) {
    return children;
  }
  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => !e.name.startsWith('.'))
    .sort((a, b) => {
      if (a.isDirectory() === b.isDirectory()) {
        return a.name.localeCompare(b.name, 'pt');
      }
      return a.isDirectory() ? -1 : 1;
    });

  for (const e of entries) {
    const rel = baseRel ? `${baseRel}/${e.name}` : e.name;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      children.push({
        name: e.name,
        type: 'dir',
        relPath: rel,
        children: walk(full, rel),
      });
    } else {
      children.push({
        name: e.name,
        type: 'file',
        relPath: rel,
      });
    }
  }
  return children;
}

const tree = walk(contextoDir, '');
const payload = {
  generatedAt: new Date().toISOString(),
  rootLabel: 'contexto',
  note:
    'Gerado por node cliente/scripts/gerar-estrutura-manifest.js. Rode de novo após criar ou alterar arquivos em contexto/.',
  children: tree,
};

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(payload, null, 2), 'utf8');

const status = fs.existsSync(contextoDir) ? 'ok' : 'aviso: pasta contexto/ ainda não existe';
console.log(`estrutura-manifest.json → ${outFile}`);
console.log(`Itens na raiz de contexto/: ${tree.length} (${status})`);
