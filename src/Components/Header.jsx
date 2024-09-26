import styles from "../Styles/header.module.css"
import burger from "../Asserts/Burger PNG.png"
export default function Header(){
    return(
        <div className={styles.header}>
            <img className={styles.appImage} src={burger} />
            <div className={styles.appName}> FoodApp</div>
        </div>
    );
}