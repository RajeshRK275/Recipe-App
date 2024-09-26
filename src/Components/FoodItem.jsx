import styles from "../Styles/foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.foodContainer}>
      <img className={styles.foodImage} src={food.image} alt="Food"/>
      <div className={styles.itemContent}>
        <p className={styles.foodName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => setFoodId(food.id)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
