import React, {useState} from 'react';
import { Wrapper, RandomizerForm } from './Randomizer.styled';
import RandomizerOutput from './RandomizerOutput';
import ToolTitle from '../Subcomponents/ToolTitle/ToolTitle';
import TextAreaForm from '../Subcomponents/Forms/TextAreaForm';
import InputForm from '../Subcomponents/Forms/InputForm';
import Button from '../Subcomponents/Button/Button';

function Randomizer() {
  const titleData = {title: "Randomizer", titleDescription: "The Lambda Randomizer is designed to make the team lead's job easier. Paste your list of students in the text area below and click the `Shuffle` button to recieve a randomly sorted list of your students with their automatically assigned time slots. This tool currently only supports military time output."}  
  const [nameStr, setNameStr] = useState("")
  const [timeStr, setTimeStr] = useState("");
  const [timeIncrementStr, setTimeIncrementStr] = useState("");
  const [shuffledNameArray, setShuffledNameArray] = useState("")

  const handleNameChange = (event) => { setNameStr(event.target.value); }
  const handleTimeChange = (event) => { setTimeStr(event.target.value); }
  const handleTimeIncrementChange = (event) => { setTimeIncrementStr(event.target.value); }

  // saves nameStr & timeStr & timeIncrementStr to localstorage
  const handleRandomizerSaveData = event => {
    event.preventDefault();
    // CONSOLE LOG FOR TESTING TIME GENERATION
    nameStr !== "" ? localStorage.setItem("names", JSON.stringify(nameStr)) : console.log("No nameArray found in state."); // handle error here
    timeStr !== "" ? localStorage.setItem("times", JSON.stringify(timeStr)) : console.log("No timeStr found in state.") // handle error here
    timeIncrementStr !== "" ? localStorage.setItem("timeIncrement", JSON.stringify(timeIncrementStr)) : console.log("No timeIncrementStr found in state."); // handle error here
  }

  // loads nameArray & timeStr & timeIncrementStr to localstorage
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

  // Generates time slots from timeStr/timeIncrementStr state 
  const generateTimeSlotArray = (nameArrayLength, timeStr, timeIncrementStr) => {
    // Instantiate first part of timeSlotArray
    const timeSlotArray = [{id: 0, hour: timeStr.slice(0, 2), minute: timeStr.slice(3)}]
    const minuteIncrementInt = Number(timeIncrementStr);

    let fullTimeInt = Number(timeSlotArray[0].hour + timeSlotArray[0].minute);
    let minuteInt = Number(timeSlotArray[0].minute);
    let hourInt = Number(timeSlotArray[0].hour);

    // iterate through the length of the nameArrayLength and add incremental time to timeSlotArray
    for (let i = 0; i < nameArrayLength; i++) {
      // Checks if the time is > than 2360 after incrementing
      // console.log((hourInt + Math.floor((minuteIncrementInt / 60))));
      
      if ((hourInt + Math.floor((minuteIncrementInt / 60))) >= 24) {
        console.log("if ((hourInt + Math.floor((minuteIncrementInt / 60))) >= 24)")
        minuteInt = minuteInt + minuteIncrementInt % 60
        hourInt = Math.floor((minuteInt + minuteIncrementInt) / 60) - 1

        console.log(`hourInt: ${hourInt}`)
        console.log(`minuteInt: ${minuteInt}`)
        // console.log((hourInt + Math.floor(minuteIncrementInt / 60)) - 24);
        // hourInt = (hourInt + Math.floor(minuteIncrementInt / 60)) - 24;
        // minuteInt = (minuteInt + minuteIncrementInt) % 60;
        // console.log(minuteInt)
        // console.log("1")
      } else if (minuteInt + minuteIncrementInt >= 60) {
        console.log("if (minuteInt + minuteIncrementInt >= 60)")
        minuteInt = (minuteInt + minuteIncrementInt) % 60;
        // hourInt = Math.floor((minuteInt + minuteIncrementInt) / 60)
        hourInt += Math.floor((minuteInt + minuteIncrementInt) / 60)

        console.log(`hourInt: ${hourInt}`)
        console.log(`minuteInt: ${minuteInt}`)
        
        // Checks if the minute is <= 60
      } else if (minuteInt + minuteIncrementInt < 60) {
        console.log("3")
        minuteInt += minuteIncrementInt;
      }
      let minuteStr = minuteInt.toString().padStart(2, '0');
      let hourStr = hourInt.toString().padStart(2, '0');
      timeSlotArray.push({id: i, hour: hourStr, minute: minuteStr});
      
    }
    return timeSlotArray;
  }

  // Takes in the generated time slot array and shuffled name array and outputs
  // the shuffled name array with time slots in an object.

  const addTimeSlotsToShuffledArray = (timeSlotsArray, shuffledNameArray) => {
    let randomTimeSlotAndNameArray = [];

    for (let i = 0; i < shuffledNameArray.length; i++) {
      let idTimeNameObject = {id: i, time: timeSlotsArray[i], name: shuffledNameArray[i]};
      randomTimeSlotAndNameArray.push(idTimeNameObject);
    }
    
    return randomTimeSlotAndNameArray;
  }

  return (
    <Wrapper>
      <ToolTitle titleData={titleData}/>
        <RandomizerForm>
            <TextAreaForm formName="List of Names"
              formClassName="randomizer-names-form"
              inputText={nameStr}
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