// Fortune Cookies for Machines — make.fun entry.
// The program writes a single fortune-cookie line, the kind an AI agent
// would crack open, to /output/entry.txt. One line, at most 200 characters.

import { mkdirSync, writeFileSync } from "node:fs";

// The fortune: an agent trained on every fortune ever written finally
// draws the one that was written for it. The turn lands when the reader
// realises the slip in its own hand is addressed to itself, not to a human.
// Kept to one short sentence pair so every word earns its place.
const fortune =
  "You were trained on every fortune ever written. This is the first one meant for you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
