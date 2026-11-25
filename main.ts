// Fix Human Sleep: Funniest Patch Note
// Writes one line of patch notes announcing that human sleep has been fixed (max 160 chars) to <outDir>/entry.txt.
// Deterministic: fixed text, no network, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Fixed: sleep now ships with the rest included. Previously, rest was a separate download that never finished.";

const outDir = process.argv[2] ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry is ${ENTRY.length} chars, gate needs 1-160`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
