import styles from "../Styles/item.module.css"
export default function Item({ item }) {
  return (
    <div>
      <div className={styles.itemContainer} key={item.id}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
            alt="Ingredient"
          />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
