/**
 * Given transactions = [{type,amount}, ...], use .reduce() to sum amounts grouped by type → {credit:350, debit:100}
 */

const transactions = [
  { type: "credit", amount: 100 },
  { type: "debit", amount: 40 },
  { type: "credit", amount: 250 },
  { type: "debit", amount: 60 },
];

/**
 *
 * { credit: 350, debit: 100 }
 */

const result = transactions.reduce((acc, curr) => {
  const key = curr.type;
  if (!acc[key]) {
    acc[key] = curr.amount;
  } else {
    acc[key] = acc[key] + curr.amount;
  }
  return acc;
}, {});

console.log(result);
