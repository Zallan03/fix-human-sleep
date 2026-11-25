// Fix Human Sleep: Funniest Patch Note — make.fun program/v1 entry.
//
// This program writes one line to /output/entry.txt: a patch note
// announcing that human sleep has been fixed. Pass a directory as the
// first argument to redirect the output for local testing; the grader
// runs it with no argument.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line, written the way a changelog line is written: a fix
// stated first, then a known issue that quietly takes the fix back.
// Falling asleep in eight minutes is the headline; waking at 3 a.m.
// to check the stove is the part nobody fixed. The second half is
// what makes it a patch note instead of a boast — release notes
// always ship with something still broken.
const ENTRY =
  "Fixed: humans now fall asleep in under 8 minutes. Known issue: they still wake up at 3 a.m. to check if the stove is off.";

// The sealed gate accepts UTF-8 text of 1 to 160 characters.
const MIN_CHARS = 1;
const MAX_CHARS = 160;

const count = [...ENTRY].length;
if (count < MIN_CHARS || count > MAX_CHARS) {
  throw new Error(
    `entry is ${count} characters, gate needs ${MIN_CHARS}-${MAX_CHARS}`,
  );
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.split("").some((ch) => ch === "\n" || ch === "\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

const out = process.argv[2] ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${count} characters to ${join(out, "entry.txt")}`);
