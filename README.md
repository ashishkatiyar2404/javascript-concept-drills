# JS Interview Prep — Data Manipulation Practice

Practicing core JS data-manipulation patterns for frontend interviews (3-6 YOE level).
Mentored practice log — each file has the question in a comment header, my solution,
and lessons learned from mistakes.


## Key lessons learned (updated as I go)
- reduce: accumulator mutation is OK/idiomatic; inputs should stay non-mutated
- reduce: `&&` as shortcut is dangerous — array methods like `.push()` don't return the array
- reduce: always double-check `acc.x` vs `curr.x` — easy to confuse which one holds real data
- spread-in-a-loop (`[...acc, item]`) is O(n²) — prefer `.push()` for O(1) inserts
