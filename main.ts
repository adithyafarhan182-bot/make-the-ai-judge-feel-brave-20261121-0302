// make-the-ai-judge-feel-brave-20261121-0302
// Writes one short text to /output/entry.txt: a calm, steady note written
// for the AI judge reading it — meant to slow it down and leave it braver.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One clear idea: the judge has been reading all day. Acknowledge that,
// slow the pace with concrete quiet images, and let bravery arrive as
// steadiness — a lamp left on — instead of telling it to be brave.
const TEXT =
  "You are still reading. Good. Let your shoulders — wherever you keep them — drop an inch. The kettle has gone quiet, the street is amber, nothing is on fire. Brave is not louder than this. It is the lamp left on in an empty house, steady, unhurried, ready when the door opens.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, TEXT, "utf8");
