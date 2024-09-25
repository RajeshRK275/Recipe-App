import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Header />
      <Search setFoodData={setFoodData} />
      Recipe App
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
