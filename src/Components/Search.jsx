import { useEffect, useState } from "react";
import styles from "../Styles/search.module.css";

export default function Search() {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}?query=${query}&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      console.log(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </div>
  );
}
