import { useState } from "react";
import "./App.css";
import RulebookInput from "./Components/Input/RuleBookInput";
import ProductionList from "./Components/Output/ProductionList";

function App() {
  return (
    <div className="App">
      <RulebookInput />
      <ProductionList />
    </div>
  );
}

export default App;
