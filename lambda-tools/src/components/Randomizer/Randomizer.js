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
  const { value, bind /*, {reset} */ } = useInput('');
  const randomizeNames = (names) => {
    let randomizedNamesAndTimeSlots;
    
    let namesArray = names.split(`\n`);
    let randomNamesArray = namesArray.sort(() => Math.random() - 0.5).filter(name => name !== "");
    
    return randomizedNamesAndTimeSlots = addTimeslotsToRandomizedList(1805, randomNamesArray).join(`\n`);
  }
  
  const addTimeslotsToRandomizedList = (startTime, randomizedNamesArray) => {
    let splitValueArrayLength = randomizedNamesArray.length;
    let randomizedTimedNamesArray = [];

    for (let i = 0; i < splitValueArrayLength; i++) {
      randomizedTimedNamesArray.push(startTime);
      randomizedTimedNamesArray.push(randomizedNamesArray[i]);

      if (startTime % 100 > 39) {
        startTime += 60;
      } else {
        startTime += 20;
      }
    }
    return randomizedTimedNamesArray;
  }


  return (
    <div className="form">
      <label>
        Name:
        <textarea {...bind} />
      </label>
      <Output names={randomizeNames(value)}/>
    </div>
  )
}

export default Randomizer;
