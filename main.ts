// The Houseplant Out-of-Office
// Writes a houseplant's out-of-office auto-reply (120 characters or fewer) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Out of office. I survived three of your holidays on condensation and spite. Water me like you mean it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
