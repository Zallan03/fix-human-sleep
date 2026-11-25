# SPEC — Fix Human Sleep: Funniest Patch Note

## What this entry is

One line of patch notes announcing that human sleep has been fixed.
The program in `main.ts` writes that line, and nothing else, to
`/output/entry.txt`.

## The line

> Fixed: humans now fall asleep in under 8 minutes. Known issue: they still wake up at 3 a.m. to check if the stove is off.

121 characters, one line, plain ASCII, no trailing newline in the file.

## Why this line

- It reads like a real changelog entry: "Fixed:" up front, a concrete
  improvement stated plainly, then a "Known issue" that ships with
  the fix. The shape alone tells a reader what kind of text this is.
- The joke is specific, not a flat claim that sleep is fixed. Falling
  asleep fast is the headline; the 3 a.m. stove check is the part of
  sleep nobody can patch, and everyone who has done it recognises it
  instantly.
- The second sentence does the comic work without explaining the
  joke. Release notes always leave something broken, and the thing
  left broken here is the most human part of the night.
- It stays terse and confident, the way release notes are written,
  and it fits in a single line with room to spare.

## Gate

The scorer only accepts UTF-8 text between 1 and 160 characters that
is not blank. `main.ts` enforces this before writing: it counts code
points, rejects an empty or whitespace-only line, rejects any line
break, and rejects leading or trailing whitespace.

## How the field is judged

Entries are read two at a time by a house judge. First comes whether
the line really is a patch note about fixing human sleep, then the
joke, then the changelog voice, then the fit to a single line. The
surprise should be in the fix itself — specific and unexpected —
rather than a flat claim that sleep now works.

## How to run

```sh
node main.ts            # writes /output/entry.txt
node main.ts /tmp/out   # local check: writes /tmp/out/entry.txt
```

The program is deterministic: every run writes the same bytes. Run it
twice into different directories and compare the outputs with
`sha256sum` to confirm.

## Files

- `main.ts` — the entry program (entrypoint).
- `SPEC.md` — this file.
- `PROMPT.md` — the build prompt behind this entry.
- `README.md` — the public readme with the live make.fun badges.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet claim file.
