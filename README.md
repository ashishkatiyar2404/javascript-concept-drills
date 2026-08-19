# JS Interview Prep — Data Manipulation Practice

Practicing core JS data-manipulation patterns for frontend interviews (3-6 YOE level).
Mentored practice log — each file has the question in a comment header, my solution,
and lessons learned from mistakes.

## Key lessons learned (updated as I go)

- reduce: accumulator mutation is OK/idiomatic; inputs should stay non-mutated
- reduce: `&&` as shortcut is dangerous — array methods like `.push()` don't return the array
- reduce: always double-check `acc.x` vs `curr.x` — easy to confuse which one holds real data
- spread-in-a-loop (`[...acc, item]`) is O(n²) — prefer `.push()` for O(1) inserts

## 🧠 Cross-cutting lessons (apply everywhere)

- **Always `return acc`** from a reduce callback with a block body — forgetting it silently breaks the chain.
- **`acc` = what you're building, `curr` = current input item** — easy to accidentally read/write the wrong one.
- **Mutating the accumulator inside reduce is fine/idiomatic** (it's local, call-scoped); mutating shared/external/global state is not.
- **Spread-in-a-loop (`[...acc,x]` / `{...acc,[k]:v}`) is O(n²)** — prefer `.push()` / direct property assignment for O(n).
- **`typeof null === "object"`** is a recurring gotcha — always guard explicitly when checking "is this really an object."
- **`&&` vs `||` for exclusion checks**: "reject if X or Y" in English usually means `&&` in code (`!==X && !==Y`), not `||` — with `||` almost everything passes, making the guard meaningless.
- **Match the exact stated rule**, not a narrower rule that happens to pass the one sample given.
- **map** = same count, 1-to-1 transform. **filter** = subset, no transform. **reduce** = collapse/restructure, different shape/count. Pick the smallest tool that fits — don't reach for reduce when map/filter alone would do.
