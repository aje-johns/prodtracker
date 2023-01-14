import { useState } from "react";
import RulebookInput from "./RuleBookInput";

export default function UserInput(props) {
  const rbDataHandler = (dataFromRulebookInput) => {
    const userInput = {
      ...dataFromRulebookInput,
    };
    props.onAddPolicy(userInput); // to send the data to the App.js file
  };
  return <RulebookInput onSaveForm={rbDataHandler} />;
}
