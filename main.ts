// The Moon Gets One Star: a one-star review of the Moon itself.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = '★☆☆☆☆ Ordered a full moon. Arrived in instalments over two weeks, then got repossessed in instalments.';
if ([...line].length > 120) throw new Error('entry is over 120 characters');
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
