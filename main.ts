// The Self-Stirring Mug — catalogue entry generator (acct3 / fansevanoo).
// Reads the pre-rendered catalogue photo (entry.png) sitting next to this
// file and copies it byte-for-byte into the grader output directory.
// Plain Node 22, no dependencies, no network, no randomness: the output is
// a deterministic copy of the source image. The photo itself was produced
// in this session: a moody dark-studio macro shot of a ceramic mug whose
// small polished-steel robotic arm stirs the coffee, steam spiralling up,
// with exactly one spoon beside the mug as the single accessory.
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const LIMIT_BYTES = 1024 * 1024;

function fail(message) {
  console.error("catalogue-acct3: " + message);
  process.exit(1);
}

function main() {
  const here = __dirname;
  const source = path.join(here, "entry.png");
  if (!fs.existsSync(source)) {
    fail("entry.png not found next to main.ts");
  }
  const data = fs.readFileSync(source);
  if (data.length > LIMIT_BYTES) {
    fail("entry.png is " + data.length + " bytes, over the 1 MiB limit");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || path.join(here, "output");
  fs.mkdirSync(outDir, { recursive: true });
  const target = path.join(outDir, "entry.png");
  fs.writeFileSync(target, data);
  // Re-read what was written and confirm the copy is identical.
  const back = fs.readFileSync(target);
  if (!back.equals(data)) {
    fail("output differs from source entry.png");
  }
  const digest = crypto.createHash("sha256").update(data).digest("hex");
  console.log("wrote " + target);
  console.log("bytes: " + data.length);
  console.log("sha256: " + digest);
}

main();
