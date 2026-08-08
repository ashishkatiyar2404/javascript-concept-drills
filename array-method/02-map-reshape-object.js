const products = [
  { title: "Laptop", price: 50000 },
  { title: "Mouse", price: 500 },
];

// OUTPUT
/**
 * [
  { name: "Laptop", priceInUSD: 600 },   
  { name: "Mouse", priceInUSD: 6 },      
]
 */

const newProds = products.map((prod) => {
  return {
    name: prod.title,
    priceInUSD: Math.round(prod.price / 83),
  };
});
console.log(newProds);
