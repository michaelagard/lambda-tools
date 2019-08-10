import React, {useState} from 'react';
import RandomizerOutput from './RandomizerOutput';
import ToolTitle from '../ToolTitle';
import TextAreaForm from '../TextAreaForm';
import InputForm from '../InputForm';
import Button from '../Button';

function Randomizer() {
  const titleData = {title: "Randomizer", titleDescription: "The Lambda Randomizer is designed to make the team lead's job easier. Paste your list of stuends in the text area below and click the Shuffle button to recieve a randomly sorted list of your students with their automatically assigned time slots. Now you can just copy and paste the time slots into your team's Slack channel. This tool currently only supports military time."}  
  const [nameArray, setNameArray] = useState("")
  const [time, setTime] = useState("");
  const [timeIncrement, setTimeIncrement] = useState("");
  const [shuffledNameArray, setShuffledNameArray] = useState("")

  const handleNameChange = (event) => { setNameArray(event.target.value); }
  const handleTimeChange = (event) => { setTime(event.target.value); }
  const handleTimeIncrementChange = (event) => { setTimeIncrement(event.target.value); }
  
  const handleSaveData = event => {
    event.preventDefault();
    localStorage.setItem("nameArray", JSON.stringify(nameArray.split("\n").filter(function(name) { return name.trim() !== ''; })));
    localStorage.setItem("time", JSON.stringify(time));
    localStorage.setItem("timeIncrement", JSON.stringify(timeIncrement))
  }

  const handleLoadData = event => {
    event.preventDefault();
    setNameArray(JSON.parse(localStorage.getItem("nameArray")).join("\n"));
    setTime(JSON.parse(localStorage.getItem("time")));
    setTimeIncrement(JSON.parse(localStorage.getItem("timeIncrement")));
  };

  const handleShuffleNameArray = event => {
    event.preventDefault();
    let shuffledNameArray = nameArray.split("\n").sort((name1,name2) => 0.5 - Math.random());
    let output = addTimeSlotsToShuffledArray(generateMilitaryTimeSlots(shuffledNameArray.length - 1), shuffledNameArray);
    setShuffledNameArray(output);
  };

  const generateMilitaryTimeSlots = (shuffledNameArrayLength) => {
    let timeSlotArray = [];
    let timeIncrementInt = parseInt(timeIncrement);
    let minuteStr = time.toString().substr(3,2).padStart(2, '0');
    let hourStr = time.toString().substr(0,2).padStart(2, '0');
    let fullTimeStr = hourStr + minuteStr;
    let minuteInt = parseInt(time.toString().substr(3,2).padStart(2, '0'));
    let hourInt = parseInt(time.toString().substr(0,2).padStart(2, '0'));
    let fullTimeInt = parseInt(hourStr + minuteStr);
    
    timeSlotArray.push(fullTimeInt.toString().padStart(4, '0'));
     
    for (let i = 0; i < shuffledNameArrayLength; i++) {
      if ((fullTimeInt + timeIncrementInt) >= 2360) {

        hourInt = 0;
        minuteInt = fullTimeInt % 60;
      } else if (minuteInt + timeIncrementInt >= 60) {

        minuteInt = (minuteInt + timeIncrementInt) % 60;
        hourInt += 1;
      } else if (minuteInt + timeIncrementInt <= 60) {

        minuteInt += timeIncrementInt;
      }

      fullTimeInt = parseInt(hourInt.toString().padStart(2, '0') + minuteInt.toString().padStart(2, '0'))
      fullTimeStr = hourInt.toString().padStart(2, '0') + minuteInt.toString().padStart(2, '0')
      timeSlotArray.push(fullTimeStr);
    }
    
    return timeSlotArray;
  }

  const addTimeSlotsToShuffledArray = (timeSlotsArray, shuffledNameArray) => {
    let randomTimeSlotAndNameArray = [];
    for (let i = 0; i < shuffledNameArray.length; i++) {
      randomTimeSlotAndNameArray.push([timeSlotsArray[i], " - ", shuffledNameArray[i]].join(""));
    }
    return randomTimeSlotAndNameArray;
  }

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
              <Button onClickAction={handleShuffleNameArray} 
              title={"Shuffle"}/>
            </div>
            <TextAreaForm formName="List of Names"
              formClassName="randomizer-names-form"
              inputText={nameArray}
              handleInputText={handleNameChange}
              placeHolderText={"Seperate names by a newline"}/>

            <InputForm formName="Starting Time"
              type={"time"}
              formClassName="randomizer-time-form"
              inputText={time}
              handleInputText={handleTimeChange}
              placeHolderText={"HH:MM"}
              maxLength="8"
              />
            <InputForm formName="Minute Increment"
              type={"number"}
              formClassName="randomizer-time-form"
              inputText={timeIncrement}
              handleInputText={handleTimeIncrementChange}
              // placeHolderText={"HH:MM"}
              // maxLength="8"
              />
          </form>
          <RandomizerOutput shuffledNameArray={shuffledNameArray}/>
        </div>
      </div>
    </div>
  );
}

export default Randomizer;