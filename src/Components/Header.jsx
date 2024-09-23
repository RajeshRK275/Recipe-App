import styles from "../Styles/header.module.css"
export default function Header(){
    return(
        <div className={styles.header}>
            <span>
                <img alt="Header Image"/>
            </span>
            <span>Header</span>
        </div>
    );
}