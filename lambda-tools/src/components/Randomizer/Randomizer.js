import React, {useState} from 'react';
import { Container, RandomizerForm } from './Randomizer.styled';
import RandomizerOutput from './RandomizerOutput';
import ToolTitle from '../ToolTitle/ToolTitle';
import TextAreaForm from '../Forms/TextAreaForm';
import InputForm from '../Forms/InputForm';
import Button from '../Button/Button';

function Randomizer() {
  const titleData = {title: "Randomizer", titleDescription: "The Lambda Randomizer is designed to make the team lead's job easier. Paste your list of stuends in the text area below and click the Shuffle button to recieve a randomly sorted list of your students with their automatically assigned time slots. Now you can just copy and paste the time slots into your team's Slack channel. This tool currently only supports military time."}  
  const [nameArray, setNameArray] = useState("")
  const [timeStr, setTimeStr] = useState("");
  const [timeIncrementStr, setTimeIncrementStr] = useState("");
  const [shuffledNameArray, setShuffledNameArray] = useState("")

  const handleNameChange = (event) => { setNameArray(event.target.value); }
  const handleTimeChange = (event) => { setTimeStr(event.target.value); }
  const handleTimeIncrementChange = (event) => { setTimeIncrementStr(event.target.value); }

  // saves nameArray & timeStr & timeIncrementStr to localstorage
  const handleSaveData = event => {
    event.preventDefault();
    localStorage.setItem("nameArray", JSON.stringify(nameArray.split("\n").filter(function(name) { return name.trim() !== ''; })));
    localStorage.setItem("time", JSON.stringify(timeStr));
    localStorage.setItem("timeIncrement", JSON.stringify(timeIncrementStr))
  }
  // loads nameArray & timeStr & timeIncrementStr to localstorage
  const handleLoadData = event => {
    event.preventDefault();
    setNameArray(JSON.parse(localStorage.getItem("nameArray")).join("\n"));
    setTimeStr(JSON.parse(localStorage.getItem("time")));
    setTimeIncrementStr(JSON.parse(localStorage.getItem("timeIncrement")));
  };

  // Clicking the button associated, uses the nameArray
  const handleShuffleNameArray = event => {
    event.preventDefault();

    let shuffledNameArray = nameArray.split("\n").sort(() => 0.5 - Math.random());
    let shuffledNameAndTimeArray = addTimeSlotsToShuffledArray(generateMilitaryTimeSlots(shuffledNameArray.length - 1, parseInt(timeStr.replace(":", "")), parseInt(timeIncrementStr)), shuffledNameArray);
    
    setShuffledNameArray(shuffledNameAndTimeArray);
  };

  const parseTimeFromString = (timeStr) => {
    const [minute, hour] = [parseInt(timeStr.substr(3,2).padStart(2, '0')), parseInt(timeStr.substr(0,2).padStart(2, '0'))];
    return [minute, hour];
  }

  // Generates time slots from timeStr/timeIncrementStr state 
  const generateMilitaryTimeSlots = (shuffledNameArrayLength, fullTimeInt, timeIncrementInt) => {

    const timeUnitIntToStrWithPadding = (timeUnitInt) => {
      return timeUnitInt.toString().padStart(2, '0');
    }
    
    let timeSlotArray = [];
    let fullTimeStr = fullTimeInt.toString().padStart(4, '0');
    // Used to check conditionals below
    let [minuteInt, hourInt] = parseTimeFromString(fullTimeStr);
    
    timeSlotArray.push(fullTimeStr.replace(":", ""));
    for (let i = 0; i < shuffledNameArrayLength; i++) {
      // Checks if the time is > than 2360 after incrementing
      if ((fullTimeInt + timeIncrementInt) >= 2360) {
        hourInt = 0;
        minuteInt = (minuteInt + timeIncrementInt) % 60;
        // Checks if the minute is >= 60
      } else if (minuteInt + timeIncrementInt >= 60) {
        minuteInt = (minuteInt + timeIncrementInt) % 60;
        hourInt += 1;
        // Checks if the minute is <= 60
      } else if (minuteInt + timeIncrementInt < 60) {
        minuteInt += timeIncrementInt;
      }

      fullTimeInt = parseInt(timeUnitIntToStrWithPadding(hourInt) + timeUnitIntToStrWithPadding(minuteInt));
      fullTimeStr = timeUnitIntToStrWithPadding(hourInt) + timeUnitIntToStrWithPadding(minuteInt);
      timeSlotArray.push(fullTimeStr);
    }
    return timeSlotArray;
  }

  // Takes in the generated time slot array and shuffled name array and outputs
  // the shuffled name array with time slots hyphonated to each name.
  // EG: input: [ "2105", "2125"] | Array(7) [ "Foo Bar", "Roo Far" ]
  // output: [ "2105 - Foo Bar", "2125 - Roo Far" ]

  const addTimeSlotsToShuffledArray = (timeSlotsArray, shuffledNameArray) => {
    let randomTimeSlotAndNameArray = [];

    for (let i = 0; i < shuffledNameArray.length; i++) {
      const arrayFormat = [timeSlotsArray[i], " - ", shuffledNameArray[i]];
      randomTimeSlotAndNameArray.push(arrayFormat.join(""));
    }
    
    return randomTimeSlotAndNameArray;
  }

  return (
    <Container>
      <ToolTitle titleData={titleData}/>
        <RandomizerForm>
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
              type="time"
              formClassName="randomizer-time-form"
              inputText={timeStr}
              handleInputText={handleTimeChange}
              placeHolderText={"HH:MM"}
              maxLength="8"
              />
            <InputForm formName="Minute Increment"
              type="number"
              formClassName="randomizer-time-form"
              inputText={timeIncrementStr}
              handleInputText={handleTimeIncrementChange}
              />
          <RandomizerOutput shuffledNameArray={shuffledNameArray}/>
        </RandomizerForm>
    </Container>
  );
}

export default Randomizer;