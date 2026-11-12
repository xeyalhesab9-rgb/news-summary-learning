
// Offline learning demo: copy summary-1.txt to output/entry.txt.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.OUTPUT_DIR ?? join(here, 'output');

mkdirSync(outputDir, { recursive: true });

copyFileSync(
  join(here, 'summary-1.txt'),
  join(outputDir, 'entry.txt')
);

console.log(`Summary copied to ${join(outputDir, 'entry.txt')}`);
