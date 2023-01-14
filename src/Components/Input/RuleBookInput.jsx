import { useState } from "react";
import "./RuleBookInput.css";

function getStringBetween(delimiter1, delimiter2, string) {
  const regexStr = new RegExp(
    `(?<=${delimiter1})(.|\r|\n)*(?=${delimiter2})`,
    "gi"
  );
  return string.match(regexStr);
}

function RulebookInput(props) {
  const [userInput, setUserInput] = useState({
    name: "",
    date: "",
    activity: "",
    lob: "",
    policyNo: "",
    market: "",
    type: "",
    subId: "",
    assured: "",
    endTime: "",
    aht: "",
    comments: "",
  });

  // const userInput = "Rulebook Data ";

  //***Here we extract the data from Rb and update the state of all the entries** */
  const rulebookInputHandler = (e) => {
    //here we handle the user input and set the value
    //there are other data the form will give such as the user name etc...
    const rulebookData = e.target.value;

    // the function getStringBetween can help us find all the strings we need
    // the /n should be replaced with '' space

    {
      const handleLobChange = (e) => {
        const value = e.target.value;
        setUserInput((prevData) => {
          return { ...prevData, lob: value };
        });
      };
      const handlePolicyNoChange = (e) => {
        const value = e.target.value;
        setUserInput((prevData) => {
          return { ...prevData, policyNo: value };
        });
      };
      const handleMarketChange = (e) => {
        const value = e.target.value;
        setUserInput((prevData) => {
          return { ...prevData, market: value };
        });
      };
      const handleTypeChange = (e) => {
        const value = e.target.value;
        setUserInput((prevData) => {
          return { ...prevData, type: value };
        });
      };
      const handleSubIdChange = (e) => {
        const value = e.target.value;
        setUserInput((prevData) => {
          return { ...prevData, subId: value };
        });
      };
      const handleAssuredChange = (e) => {
        const value = e.target.value;
        setUserInput((prevData) => {
          return { ...prevData, assured: value };
        });
      };
      const handleActivityChange = (e) => {
        const value = e.target.value;
        setUserInput((prevData) => {
          return { ...prevData, activity: value };
        });
      };
      const handleDateChange = (e) => {
        const value = e.target.value;
        setUserInput((prevData) => {
          return { ...prevData, date: value };
        });
      };
    }
    //type the Regex for all the data we require
    //name: "data"
    // lob: "data",
    // policyNo: "data",
    // market: "data",
    // type: "data",
    // subId: "data",
    // assured: "data",
    // endTime: "data",
    // aht: "data",
    // comments: "data",
    //  activity: "data",
    //  date: "data",

    console.log(rulebookData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSaveForm(userInput);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setUserInput((prevData) => {
      return { ...prevData, name: value };
    });
  };
  const handleCommentsChange = (e) => {
    const value = e.target.value;
    setUserInput((prevData) => {
      return { ...prevData, comments: value };
    });
  };
  const handleAhtChange = (e) => {
    const value = e.target.value;
    setUserInput((prevData) => {
      return { ...prevData, aht: value };
    });
  };
  const handleEndTimeChange = (e) => {
    const value = e.target.value;
    setUserInput((prevData) => {
      return { ...prevData, endTime: value };
    });
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
            <input
              onChange={handleNameChange}
              className="text h-[50px] p-[20px] text-center"
              type="textarea"
            />
          </fieldset>
          <fieldset>
            <legend>Activity</legend>
            <select
              name="Activity List"
              id=""
              className="text h-[50px] w-[190px] rounded-full text-white"
            >
              <option value="open market slip entry">OM slip</option>

              <option value="open market Decleration Creation">OM Dec</option>

              <option value="Intrali Report">Intrali</option>

              <option value="etc">Etc</option>
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
