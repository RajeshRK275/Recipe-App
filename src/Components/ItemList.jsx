import Item from "./Item";

export default function ItemList({ recipeDetails, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        recipeDetails.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
}
