import { useState } from "react";
import "./App.css";
import UserInput from "./Components/Input/UserInput";
import ProductionList from "./Components/Output/ProductionList";

function App() {
  const [userInputData, setUserInputData] = useState("");

  const getUserInputHandler = (data) => {
    setUserInputData({ data });
    console.log("data in App.js");
    console.log(data);
  };

  return (
    <div className="App">
      <UserInput onAddPolicy={getUserInputHandler} />
      <ProductionList />
    </div>
  );
}

export default App;
