#!/usr/bin/env node
// Removes the ESM-only `import.meta.url` block from the Prisma generated client.
// This is needed because the project uses CommonJS (no "type":"module" in package.json),
// and Node.js v22 treats any file containing `import.meta` as ESM, breaking CJS loading.
const fs = require('fs');
const path = require('path');

const clientPath = path.join(
  __dirname,
  '..',
  'generated',
  'prisma',
  'client.ts',
);
let content = fs.readFileSync(clientPath, 'utf8');

const esmBlock = [
  "import * as process from 'node:process'",
  "import * as path from 'node:path'",
  "import { fileURLToPath } from 'node:url'",
  "globalThis['__dirname'] = path.dirname(fileURLToPath(import.meta.url))",
  '',
].join('\n');

if (content.includes(esmBlock)) {
  content = content.replace(esmBlock, '');
  fs.writeFileSync(clientPath, content);
  console.log(
    'Patched generated/prisma/client.ts: removed import.meta.url block',
  );
} else {
  console.log('generated/prisma/client.ts already patched or block not found');
}
