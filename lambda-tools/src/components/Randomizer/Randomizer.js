import React, {useState} from 'react';
import RandomizerOutput from './RandomizerOutput';
import ToolTitle from '../ToolTitle';
import Form from '../Form';
import Button from '../Button';

function Randomizer() {
  const titleData = {title: "Randomizer", titleDescription: "The Lambda Randomizer is designed to make the team lead's job easier. Paste your list of stuends in the text area below and click the Shuffle button to recieve a randomly sorted list of your students with their automatically assigned time slots. Now you can just copy and paste the time slots into your team's Slack channel. This tool currently only supports military time."}  
  const [nameArray, setNameArray] = useState("")
  const [time, setTime] = useState("");
  const [shuffledNameArray, setShuffledNameArray] = useState("")

  function handleNameChange(event){
    setNameArray(event.target.value)
  }

  const handleTimeChange = (event) => {
    setTime(validateInteger(event.target.value));
  }

  function validateInteger(count) {
    return parseInt(count) | 0;
  }

  const handleSaveData = event => {
    event.preventDefault();
    let submitData = nameArray.split("\n");
    submitData = submitData.filter(function(name) { return name.trim() !== ''; });
    localStorage.setItem("nameArray", JSON.stringify(submitData));
    localStorage.setItem("time", JSON.stringify(time));
  }

  const handleLoadData = event => {
    event.preventDefault();
    setNameArray(JSON.parse(localStorage.getItem("nameArray")).join("\n"));
    setTime(JSON.parse(localStorage.getItem("time")));
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

    let shuffledArray = nameArray.split("\n").sort((name1,name2) => 0.5 - Math.random());
    setShuffledNameArray(addTimeslotsToRandomizedList(time, shuffledArray));
  };

  return (
    <div className="randomizer-container">
      <ToolTitle titleData={titleData}/>
      <div className="wrapper">
        <div className="randomizer-form">
          <form>
            <div className="randomizer-buttons">
              <Button onClickAction={handleSaveData}
              title={"Save"}/>
              <Button onClickAction={handleLoadData}
              title={"Load"}/>
              <Button onClickAction={handleShuffleData} 
              title={"Shuffle"}/>
            </div>
            <Form formType="textarea"
              formName="List of Names"
              formClassName="randomizer-names-form"
              inputText={nameArray}
              handleInputText={handleNameChange}
              placeHolderText={"Seperate names by a newline"}/>

            <Form formType="input"
              formName="Starting Time"
              formClassName="randomizer-time-form"
              inputText={time}
              handleInputText={handleTimeChange}
              placeHolderText={"HH:MM"}
              maxLength="4"/>
          </form>
          <RandomizerOutput shuffledNameArray={shuffledNameArray}/>
        </div>
      </div>
    </div>
  );
}

export default Randomizer;