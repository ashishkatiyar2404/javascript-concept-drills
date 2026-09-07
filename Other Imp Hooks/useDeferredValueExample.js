/**
 * useDeferredValue is a React Hook used to defer a non-urgent value. It lets React keep the latest value for important UI, while allowing expensive components that use that value to temporarily render with an older value. This helps keep the UI responsive.
 *
 */

import { useState, useDeferredValue, useMemo } from "react";

// Simulate 50,000 products
const allProducts = Array.from({ length: 50000 }, (_, i) => `Product ${i + 1}`);

function SearchResults({ query }) {
  // Expensive filtering — runs on every render of this component
  const filtered = useMemo(() => {
    if (!query) return [];
    return allProducts.filter((p) =>
      p.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return (
    <ul>
      {filtered.slice(0, 200).map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Search() {
  const [query, setQuery] = useState("");

  // deferredQuery can lag behind query when rendering is expensive
  const deferredQuery = useDeferredValue(query);

  // Optional: know when the UI is showing stale results
  const isStale = query !== deferredQuery;

  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search 50,000 products..."
      />

      <div style={{ opacity: isStale ? 0.5 : 1 }}>
        <SearchResults query={deferredQuery} />
      </div>
    </>
  );
}

/**
 * Here, query updates immediately because the user is typing. But SearchResults receives deferredQuery, which can temporarily lag behind   if rendering the results is expensive. React can prioritize the input and update the results afterward.
 */

// Why do we need it?
/**
 * We use useDeferredValue when we have an important value that changes frequently, but some component consuming that value is expensive to render. We don't want the expensive rendering to make the important UI feel slow.
 *
 */

// Give example
/** Imagine a search input with 50,000 products. When the user types, the input needs to update immediately, but rendering 50,000 filtered results can be expensive. I can use useDeferredValue so the input uses the latest query, while the expensive results component uses deferredQuery. This prevents the typing experience from becoming sluggish. */

// Does it make rendering faster?
// No. useDeferredValue doesn't make the expensive rendering itself faster. It improves responsiveness by allowing the expensive rendering to happen at a lower priority.

// NOTE - don't explain useDeferredValue as "it delays the value." Say "it allows the consuming UI to temporarily lag behind the latest value."
