import styles from "../Styles/foodItem.module.css";
export default function FoodItem({ food }) {
  return (
    <div className={styles.foodContainer}>
      <img className={styles.foodImage} src={food.image} />
      <div className={styles.itemContent}>
        <p className={styles.foodName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.itemButton}>View Recipe</button>
      </div>
    </div>
  );
}
