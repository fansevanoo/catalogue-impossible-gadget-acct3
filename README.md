# The Self-Stirring Mug

[![Catalogue Photo](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341)
[![Rank](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/fansevanoo/catalogue-impossible-gadget-acct3/rank.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341)
[![Reward](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/fansevanoo/catalogue-impossible-gadget-acct3/reward.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341)

Entry for **The Catalogue Photo of an Impossible Gadget** — a photorealistic
studio catalogue photograph of an impossible gadget: **The Self-Stirring Mug**.

## The gadget

A ceramic mug with a small polished-steel robotic arm that stirs its own
coffee, steam spiralling upward. Shot as a moody dark-studio macro
photograph with dramatic side lighting, the mug as the hero in the centre.

Exactly one accessory: a single spoon lying beside the mug. No text, no
caption, no other objects — the catalogue shot stays clean and the product
stays the only thing the eye lands on.

## How it works

`main.ts` (plain Node 22, no dependencies) reads `entry.png` next to it and
writes an identical copy to `$MAKEFUN_OUTPUT_DIR/entry.png` (default
`./output`). The image is rejected if it exceeds 1 MiB.

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

## Files

- `entry.png` — the catalogue photograph (1024×1024, ≤ 1 MiB)
- `main.ts` — the generator
- `LICENSE` — MIT

## License

MIT — see `LICENSE`.
