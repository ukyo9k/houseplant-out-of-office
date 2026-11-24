// The Houseplant Out-of-Office — make.fun entry.
// Writes a single out-of-office auto-reply, as if a houseplant sent it,
// (1-120 characters) to $MAKEFUN_OUTPUT_DIR/entry.txt,
// falling back to /output/entry.txt.
// Node 22+, standard library only. No network, no input, deterministic:
// every run writes exactly the same bytes, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line, written fresh for this competition.
const LINE =
  "Out of office — my human left me a self-watering globe that ran dry on day one. Water me, don't email me.";

// Maximum length of a competition entry line, in code points.
const MAX_CHARS = 120;

// Validate the entry line: non-empty, a single line, within the limit.
function validate(line: string): void {
  const chars = [...line];
  if (chars.length === 0) {
    throw new Error("entry line must not be empty");
  }
  if (chars.length > MAX_CHARS) {
    throw new Error(
      `entry line is ${chars.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
}

function main(): void {
  validate(LINE);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
