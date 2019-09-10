import React, {useState} from 'react';
import { Wrapper, RandomizerForm } from './Randomizer.styled';
import RandomizerOutput from './RandomizerOutput';
import ToolTitle from '../Subcomponents/ToolTitle/ToolTitle';
import TextAreaForm from '../Subcomponents/Forms/TextAreaForm';
import InputForm from '../Subcomponents/Forms/InputForm';
import Button from '../Subcomponents/Button/Button';
import { generateTimeSlotArray, addTimeSlotsToShuffledArray } from './RandomizerLogic';

function Randomizer() {
  const titleData = {title: "Randomizer", titleDescription: "The Lambda Randomizer is designed to make the team lead's job easier. Paste your list of students in the text area below and click the `Shuffle` button to recieve a randomly sorted list of your students with their automatically assigned time slots. This tool currently only supports military time output."}  
  const [nameStr, setNameStr] = useState("")
  const [timeStr, setTimeStr] = useState("");
  const [timeIncrementStr, setTimeIncrementStr] = useState("");
  const [shuffledNameArray, setShuffledNameArray] = useState("")

  const handleNameChange = (event) => { setNameStr(event.target.value); }
  const handleTimeChange = (event) => { setTimeStr(event.target.value); }
  const handleTimeIncrementChange = (event) => { setTimeIncrementStr(event.target.value); }

  const handleRandomizerSaveData = event => {
    event.preventDefault();
    nameStr !== "" ? localStorage.setItem("names", JSON.stringify(nameStr)) : console.log("No nameArray found in state."); // handle error here
    timeStr !== "" ? localStorage.setItem("times", JSON.stringify(timeStr)) : console.log("No timeStr found in state.") // handle error here
    timeIncrementStr !== "" ? localStorage.setItem("timeIncrement", JSON.stringify(timeIncrementStr)) : console.log("No timeIncrementStr found in state."); // handle error here
  }

  const handleRandomizerLoadData = event => {
    event.preventDefault();
    const [ name, time, timeIncrement ] = [ localStorage.getItem("names"), localStorage.getItem("times"), localStorage.getItem("timeIncrement") ]
    name !== null ? setNameStr(JSON.parse(name)) : console.log("No nameArray found in localStorage"); // handle error here
    time !== null ? setTimeStr(JSON.parse(time)) : console.log("No time found in localStorage"); // handle error here
    timeIncrement !== null ? setTimeIncrementStr(JSON.parse(timeIncrement)) : console.log("No timeIncrement found in localStorage"); // handle error here
  };

  const handleDeleteSaveData = event => {
    event.preventDefault();
    localStorage.removeItem("nameArray");
    localStorage.removeItem("time");
    localStorage.removeItem("timeIncrement");
    setNameStr("");
    setTimeStr("");
    setTimeIncrementStr("")
  }

  // Clicking the button associated, uses the nameArray
  const handleShuffleNameArray = event => {
    event.preventDefault();
    const timeSlotsArray = generateTimeSlotArray(nameStr.split("\n").length - 1, timeStr, timeIncrementStr);
    const shuffledNameArray = nameStr.split("\n").sort(() => 0.5 - Math.random());
    setShuffledNameArray(addTimeSlotsToShuffledArray(timeSlotsArray, shuffledNameArray));
  };

  return (
    <Wrapper>
      <ToolTitle titleData={titleData}/>
        <RandomizerForm>
            <TextAreaForm formName="List of Names"
              formClassName="randomizer-names-form"
              value={nameStr}
              onChange={handleNameChange}
              placeHolderText={"Seperate names by a newline"}/>

            <InputForm formName="Starting Time"
              type="time"
              formClassName="randomizer-time-form"
              value={timeStr}
              onChange={handleTimeChange}
              placeHolderText={"HH:MM"}
              maxLength="8"
              />
            <InputForm formName="Minute Increment"
              type="number"
              formClassName="randomizer-time-form"
              value={timeIncrementStr}
              onChange={handleTimeIncrementChange}
              />
          <div className="randomizer-buttons">
              <Button onClickAction={handleRandomizerSaveData}
              title={"Save"}/>
              <Button onClickAction={handleRandomizerLoadData}
              title={"Load"}/>
              <Button onClickAction={handleShuffleNameArray} 
              title={"Shuffle"}/>
              <Button onClickAction={handleDeleteSaveData} 
              title={"Delete Save"}/>
          </div>
        </RandomizerForm>
        <RandomizerOutput shuffledNameArray={shuffledNameArray}/>
    </Wrapper>
  );
}

export default Randomizer;