import { useState } from "react";
import "./RuleBookInput.css";

function RulebookInput() {
  const [userInput, setUserInput] = useState({
    name: "data",
    lob: "data",
    date: "data",
    activity: "data",
    lob: "data",
    policyNo: "data",
    market: "data",
    type: "data",
    subId: "data",
    assured: "data",
    endTime: "data",
    aht: "data",
    comments: "data",
  });

  const rulebookInputHandler = (e) => {
    //here we handle the user input and set the value
    //there are other data the form will give such as the user name etc...
    const rulebookData = e.target.value;
    console.log(rulebookData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Working");
    console.log(userInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <fieldset className="border border-solid border-gray-300 p-3 mb-6 flex flex-row justify-around">
        <legend className="text-sm">INPUT</legend>
        <input
          onChange={rulebookInputHandler}
          className="textarea h-[150px]"
          type="textarea"
          placeholder="RuleBook Data"
        />
        <div className="flex flex-col mx-5">
          <fieldset>
            <legend>User Name</legend>
            <input className="text h-[50px] " type="textarea" />
          </fieldset>
          <fieldset>
            <legend>Activity</legend>
            <select
              name="Activity List"
              id=""
              className="text h-[50px] w-[190px] rounded-full text-white"
            >
              <option value="rigatoni">Rigatoni</option>

              <option value="dave">Dave</option>

              <option value="pumpernickel">Pumpernickel</option>

              <option value="reeses">Reeses</option>
            </select>
          </fieldset>
        </div>
        <button type="submit" className="btn m-10">
          Add
        </button>
      </fieldset>
    </form>
  );
}

export default RulebookInput;
