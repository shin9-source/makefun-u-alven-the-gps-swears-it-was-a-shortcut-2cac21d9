import { mkdirSync, writeFileSync } from "node:fs";

// The GPS's own excuse, in its own voice: smug, defensive, blaming the map,
// with a fresh specific detail (cul-de-sac, wedding, lake) instead of a
// recalculating joke. One line, plain text, within 200 characters.
const line =
  "I didn't get you lost — the map swore it was a shortcut, so I took the scenic cul-de-sac past the wedding and let the lake see us arrive fashionably late and on purpose.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
