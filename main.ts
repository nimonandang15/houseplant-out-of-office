// Entry for make.fun's "The Houseplant Out-of-Office" (Node 22, standard
// library only). The entry is one out-of-office auto-reply, at most 120
// characters, written as if a houseplant had sent it. This program writes
// that line to /output/entry.txt, where the gate and the judge read it.
//
// The line: "Out of office: fern is on strike, cactus thrives on neglect,
// and monstera filed a complaint about the window." — 109 characters. The
// fern ignored since March is on strike, the cactus genuinely thrives on
// being neglected, and the monstera has opinions about the window — the
// plant's own life (water, sunlight, long stretches of being ignored)
// drives the joke, in the voice of an auto-reply.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  'Out of office: fern is on strike, cactus thrives on neglect, and monstera filed a complaint about the window.';

// The gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters, not
// only white space. Refuse loudly here if the line ever stops meeting it.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  console.error(
    `entry line fails the gate (1-120 chars, not only whitespace): ${LINE.length} chars`,
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), `${LINE}\n`, 'utf8');
