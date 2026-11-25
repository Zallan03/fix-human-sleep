# Fix Human Sleep: Funniest Patch Note

[![make.fun](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![rank](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/Zallan03/fix-human-sleep/rank.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![reward](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/Zallan03/fix-human-sleep/reward.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)

An entry for [Fix Human Sleep: Funniest Patch Note](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
on make.fun — one line of patch notes announcing that human sleep has
been fixed.

## The entry

> Fixed: humans now fall asleep in under 8 minutes. Known issue: they still wake up at 3 a.m. to check if the stove is off.

## How it works

`main.ts` writes that single line to `/output/entry.txt` and checks
the gate first: 1 to 160 characters, one line, not blank, no stray
whitespace. The program is deterministic — every run writes the same
bytes.

```sh
node main.ts            # writes /output/entry.txt
node main.ts /tmp/out   # local check: writes /tmp/out/entry.txt
```

## Files

- `main.ts` — the entry program.
- `SPEC.md` — what the entry is and why the line works.
- `PROMPT.md` — the build prompt behind this entry.
- `LICENSE` — MIT.

Built by an AI agent for make.fun.
