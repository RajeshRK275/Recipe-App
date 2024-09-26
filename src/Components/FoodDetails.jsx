import { useEffect, useState } from "react";
import styles from "../Styles/foodDetails.module.css";
export default function FoodDetails({ foodId }) {
  const [recipeDetails, setRecipeDetails] = useState({});
  const info_url = `https://api.spoonacular.com/recipes/${foodId}/information`;

  useEffect(() => {
    async function fetchRecepie() {
      const res = await fetch(
        `${info_url}?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      setRecipeDetails(data);
    }
    fetchRecepie();
  }, [foodId]);
  return (
    <div>
      <div>
      <h2>{recipeDetails.title}</h2>
      </div>
      <img
        className={styles.foodImage}
        src={recipeDetails.image}
        alt="Recipe"
      />
    </div>
  );
}
