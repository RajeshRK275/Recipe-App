export default function FoodItem({ food }) {
  return (
    <div>
      <img src={food.image} />
      <h3>{food.title}</h3>
      <button>View</button>
    </div>
  );
}
