import styles from "../Styles/homeContainer.module.css"
export default function HomeContainer({children}){
    return(
        <div className={styles.parentContainer}>{children}</div>
    );
}