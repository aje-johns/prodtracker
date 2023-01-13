import ProductionCard from "../UI/ProductionCard";

import { useState } from "react";
function ProductionList() {
  const [userInput, setuserInput] = useState("");

  const saveRulebookDataHandler = (userInput) => {
    setuserInput((prevstate) => {
      return { ...prevstate, locationn: "second sec" };
    });
  };

  return <ProductionCard />;
}

export default ProductionList;
