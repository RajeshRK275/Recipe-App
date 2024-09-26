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
  return (
    <div className="App">
      <Header />
      <Search setFoodData={setFoodData} />
      <HomeContainer>
        <InnerContainer>
          <FoodList foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails />
        </InnerContainer>
      </HomeContainer>
    </div>
  );
}

export default App;
