import { useState, useTransition } from "react";

const products = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `Product ${i}`,
}));

function App() {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;

    // Urgent update
    setQuery(value);

    // Non-urgent update
    startTransition(() => {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase()),
      );

      setFilteredProducts(results);
    });
  }

  return (
    <div>
      <input
        value={query}
        onChange={handleChange}
        placeholder="Search products..."
      />

      {isPending && <p>Loading results...</p>}

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

/**When should I use useTransition?
 *
 * You have a state update that causes expensive rendering, but that update doesn't need to happen   immediately. 
 * e.g - large search results
 - filtering a large list
 - switching between heavy tabs
 - rendering complex UI
 - changing a large data visualization
 - navigation between heavy screens

  NOTE - Very important: `useTransition` does NOT make your code faster
 */
