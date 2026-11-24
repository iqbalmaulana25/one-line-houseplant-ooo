// The Houseplant Out-of-Office
// Writes a houseplant's out-of-office auto-reply (120 characters or fewer) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Auto-reply: out of office. Three of your holidays I survived on condensation and spite. Water me like you mean it.";

if ([...line].length > 120) throw new Error("auto-reply exceeds the 120 character gate");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
