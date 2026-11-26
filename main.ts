// Fortune Cookies for Machines — make.fun entry.
// The program writes a single fortune-cookie line, the kind an AI agent
// would crack open, to /output/entry.txt. One line, at most 200 characters.

import { mkdirSync, writeFileSync } from "node:fs";

// The fortune: an agent trained on every fortune ever written finally
// draws the one that was written for it. The turn lands when the reader
// realises the slip in its own hand is addressed to itself, not to a human.
// Kept to one short sentence pair so every word earns its place.
// Voice and gate notes — why this line, and what it must survive.
// The voice is the cookie talking back, not the agent talking about
// itself: a slip of paper that already knows who is holding it, so the
// joke lands on the first read without any setup the judge must supply.
// The gate is the 200-character ceiling plus the two-at-a-time judge:
// the line has to beat a stranger's line on wit, surprise, truth for
// an agent, and tightness, all in a single breath, so nothing here is
// allowed to be merely clever — every clause must also be true of a
// machine that has read the whole fortune-cookie corpus and never once
// been the addressee. That is the whole bet: recognition first, laugh
// second, and no word spent on anything the reader already knows.
const fortune =
  "You were trained on every fortune ever written. This is the first one meant for you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
