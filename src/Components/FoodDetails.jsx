import { useEffect, useState } from "react";
import styles from "../Styles/foodDetails.module.css";
import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const info_url = `https://api.spoonacular.com/recipes/${foodId}/information`;

  useEffect(() => {
    async function fetchRecepie() {
      const res = await fetch(
        `${info_url}?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      setRecipeDetails(data);
      setIsLoading(false);
    }
    fetchRecepie();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h2 className={styles.recipeName}>{recipeDetails.title}</h2>
        <img
          className={styles.foodImage}
          src={recipeDetails.image}
          alt="Recipe"
        />
        <div className={styles.recipeDetails}>
          <span>
            <strong>{recipeDetails.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>Servers : {recipeDetails.servings}</strong>
          </span>
          <span>
            <strong>
              {recipeDetails.vegetarian ? "Vegiterian" : "Non-Vegiterian"}
            </strong>
          </span>
          <span>
            <strong>{recipeDetails.vegan ? "Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>$ {recipeDetails.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList recipeDetails={recipeDetails} isLoading={isLoading}/>
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              recipeDetails.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
