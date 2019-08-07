import React, {useState} from 'react';
const minimum = 0;
function Randomizer() {
  const [nameArray, setNameArray] = useState("Michael\nJess\nAlan\nPatrick\nKyle\nMax\nJeremy")
  const [time, setTime] = useState("");
  const [shuffledNameArray, setShuffledNameArray] = useState("")

  const handleNameChange = (event) => {
    setNameArray(event.target.value)
  }

  const handleTimeChange = (event) => {
    setTime(validateInteger(event.target.value));
  }

  function validateInteger(count) {
    return parseInt(count) | minimum;
  }

  const handleSaveData = event => {
    event.preventDefault();
    let submitData = nameArray.split("\n");
    submitData = submitData.filter(function(name) { return name.trim() !== ''; });
    localStorage.setItem("nameArray", JSON.stringify(submitData));
  }

  const handleLoadData = event => {
    event.preventDefault();
    setNameArray(JSON.parse(localStorage.getItem("nameArray")).join("\n"));
  }

  const addTimeslotsToRandomizedList = (startTimeString, randomizedNamesArray) => {
    let randomizedTimedNamesArray = [];

    let splitValueArrayLength = randomizedNamesArray.length;
    let startTimeInteger = Number(startTimeString);
    
    if (startTimeInteger > 100) {
      for (let i = 0; i < splitValueArrayLength; i++) {

        randomizedTimedNamesArray.push([startTimeInteger, " - ", randomizedNamesArray[i]]);
        randomizedTimedNamesArray[i] = randomizedTimedNamesArray[i].join("");

        if (startTimeInteger % 100 > 39) {
          startTimeInteger += 60;
        } else {
          startTimeInteger += 20;
        }
      }
    }
    return randomizedTimedNamesArray;
  }

  const handleShuffleData = event => {
    event.preventDefault();
    let shuffledArray = nameArray.split("\n").sort((a,b) => 0.5 - Math.random());
    setShuffledNameArray(addTimeslotsToRandomizedList(time, shuffledArray));
  };

  return (
    <div className="randomizer-container">
      <div className="wrapper">
        <div className="title">
          <h2>Randomizer</h2>
          <p>The Lambda Randomizer is designed to make the team lead's job easier. Paste your list of stuends in the text area below and click the Shuffle button to recieve a randomly sorted list of your students with their automatically assigned time slots. Now you can just copy and paste the time slots into your team's Slack channel.</p>
        </div>
        <textarea value={nameArray} onChange={handleNameChange} />
        <input value={time} type="text" pattern="[0-9]*" onChange={handleTimeChange} />
        <div className="randomizer-output">
        {typeof(shuffledNameArray) === "object" ? shuffledNameArray.map((name) =>
          <li>{name}</li>
        ) : null}
        </div>
        <button type="button" onClick={handleSaveData}>Save Data to Local Storage</button>
        <button type="button" onClick={handleLoadData}>Load Data from Local Storage</button>
        <button type="button" onClick={handleShuffleData}>Shuffle Array</button>
      </div>
    </div>
  );
}

export default Randomizer;
