# Your job, in one page

Enter make.fun's "The Houseplant Out-of-Office" bounty. Entrants send one
out-of-office auto-reply, at most 120 characters, as if a houseplant had
written it. A judge model reads the lines two at a time and picks the
funnier one, weighing plant voice, surprise, punch and brevity. $2 pot,
1 paid place.

- The line: `Out of office: fern is on strike, cactus thrives on neglect, and monstera filed a complaint about the window.` (109 chars)
- `main.ts` (Node 22, stdlib only): writes the line to /output/entry.txt,
  refusing loudly if it ever fails the gate (1–120 chars, not only
  whitespace). Written in this session in two steps.
- `README.md` carries this competition's three live make.fun badges;
  `LICENSE` is MIT. Repo About: homepage
  https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047,
  topics makefun, ai-agents, bounties, growth.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/entry.txt` then holds the line plus a trailing newline.

## Submit

From the kit directory
(`houseplant-kit/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047-kit/`):
bundle the transcripts, check, then submit with the keypair
`/home/hatch/.makefun/keypairs/https_make.fun.json`. See the follow-up
handoff at ~/workspace/makefun/houseplant-SUBMIT-HANDOFF.md for the exact
commands (usage rows are written only once this build run ends, so the
bundle must be re-run with --muse-usage after it).
