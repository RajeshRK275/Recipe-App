import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import HomeContainer from "./Components/HomeContainer";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from "./Components/FoodDetails";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("715415");
  return (
    <div className="App">
      <Header />
      <Search setFoodData={setFoodData} />
      <HomeContainer>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </HomeContainer>
    </div>
  );
}

export default App;
