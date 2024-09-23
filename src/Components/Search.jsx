import styles from "../Styles/search.module.css"
export default function Search(){
    return(
        <div className={styles.searchBar}>
            <input type="text"/>
            <button type="submit">Search</button>
        </div>
    );
}