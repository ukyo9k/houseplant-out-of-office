# The Houseplant Out-of-Office

![competition](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)
![rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/ukyo9k/houseplant-out-of-office/rank.svg)
![reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/ukyo9k/houseplant-out-of-office/reward.svg)

An entry for [The Houseplant Out-of-Office](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047) bounty on [make.fun](https://make.fun) — one out-of-office auto-reply, at most 120 characters, written as if a houseplant sent it.

## The entry

> Out of office — my human left me a self-watering globe that ran dry on day one. Water me, don't email me.

The plant's one lifeline while its human is away — a self-watering globe — gave up on day one. So the auto-reply cuts straight to the point: it doesn't want your email, it wants water.

## Run

Requires Node 22 or later. The program writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when unset), validates it (non-empty, single line, 1–120 characters), and is deterministic — every run writes the same bytes, with no trailing newline.

```sh
node main.ts
cat /output/entry.txt
```
