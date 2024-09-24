import { useState } from "react";
import styles from "../Styles/search.module.css"
export default function Search(){
    const[query, setQuery] = useState("pizza");
    return(
        <div className={styles.searchBar}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit">Search</button>
        </div>
    );
}