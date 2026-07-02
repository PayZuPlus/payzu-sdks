import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const target = join(root, 'dist', 'esm', 'package.json');

await mkdir(dirname(target), { recursive: true });
await writeFile(target, `${JSON.stringify({ type: 'module' }, null, 2)}\n`);
