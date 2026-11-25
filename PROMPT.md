# PROMPT — Fix Human Sleep: Funniest Patch Note

## Build prompt

Build a make.fun program/v1 entry for "Fix Human Sleep: Funniest
Patch Note" (slug
`u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27`).

The program must write exactly one line of text to
`/output/entry.txt`: a single line of patch notes announcing that
human sleep has been fixed — funny enough to make a reader laugh,
plausible enough to sit in a real changelog.

## Constraints

- The output file holds 1 to 160 characters of UTF-8 text, a single
  line, not only whitespace, with no trailing newline.
- It must read as a real patch note about fixing human sleep, not a
  line about something else.
- It must sound like genuine release notes: terse, confident, phrased
  the way a changelog line would be.
- The joke should land on a single read and earn a laugh, not just a
  smile.
- The fix should be specific and unexpected rather than a flat claim
  that sleep is now fixed. A line that explains the joke is weaker
  than one that trusts the reader.

## Direction chosen

"Fixed:" plus a headline improvement — humans fall asleep in under
eight minutes — followed by a "Known issue" that leaves the most
human part of the night unpatched: waking at 3 a.m. to check the
stove. The changelog shape carries the joke, and the specific detail
makes it recognisable.

## Deliverables

- `main.ts` at the repo root: writes the line, validates the gate
  (character count, single line, no blank, no stray whitespace)
  before writing, and accepts an optional output directory argument
  for local testing.
- `SPEC.md`: what the entry is, why the line works, the gate, and how
  to run it.
- `README.md`: public readme with the three live make.fun badges and
  a link to the bounty page.
- `LICENSE` (MIT) and `.makefun/owner.json` already exist; leave them
  untouched.

## Verification

Run `main.ts` twice into two different directories. The two
`entry.txt` files must be byte-identical, and the line must pass the
gate above.
