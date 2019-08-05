import React from 'react';
import Output from './Output';
import { useInput } from './hooks/input-hook';

class Randomizer extends React.Component {
  render() {
    return (
        <div>
          <h1>Randomizer</h1>
          <Form />
        </div>
    );
  }
}

function Form() {
  const { value:name, bind:bindName } = useInput('');
  const { value:time, bind:bindTime } = useInput('');
  const randomizeNames = (names) => {
    let randomizedNamesAndTimeSlots;
    
    let namesArray = names.split(`\n`);
    let randomNamesArray = namesArray.sort(() => Math.random() - 0.5).filter(name => name !== "");
    
    return randomizedNamesAndTimeSlots = addTimeslotsToRandomizedList(1920 /* make this "time" */, randomNamesArray).join(`\n`);
  }
  
  const addTimeslotsToRandomizedList = (startTimeString, randomizedNamesArray) => {
    let splitValueArrayLength = randomizedNamesArray.length;
    let randomizedTimedNamesArray = [];
    let startTimeInteger = Number(startTimeString);
    
    if (startTimeInteger > 100) {
      for (let i = 0; i < splitValueArrayLength; i++) {
        randomizedTimedNamesArray.push([startTimeInteger, " - ", randomizedNamesArray[i]]);
        randomizedTimedNamesArray[i] = randomizedTimedNamesArray[i].join("");
        console.log();
        if (startTimeInteger % 100 > 39) {
          startTimeInteger += 60;
        } else {
          startTimeInteger += 20;
        }
      }
    }
    return randomizedTimedNamesArray;
  }


  return (
    <div className="form">
        <label>
          Names 
          <textarea {...bindName} />
        </label>
        <label>
          Time
          <input type="text" {...bindTime} />
        </label>
      <Output names={randomizeNames(name)}/>
    </div>
  )
}

export default Randomizer;
