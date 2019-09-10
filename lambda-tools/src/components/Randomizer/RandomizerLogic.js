// Generates time slots from timeStr/timeIncrementStr state 
export const generateTimeSlotArray = (nameArrayLength, timeStr, timeIncrementStr) => {

  // Instantiate first part of timeSlotArray
  const timeSlotArray = [{id: 0, hour: timeStr.slice(0, 2), minute: timeStr.slice(3)}]
  const minuteIncrementInt = Number(timeIncrementStr);

  // let fullTimeInt = Number(timeSlotArray[0].hour + timeSlotArray[0].minute);
  let minuteInt = Number(timeSlotArray[0].minute);
  let hourInt = Number(timeSlotArray[0].hour);

  // iterate through the length of the nameArrayLength and add incremental time to timeSlotArray
  for (let i = 0; i < nameArrayLength; i++) {

    // checks if hourInt is greater than or equal to 24
    if ((hourInt + Math.floor((minuteIncrementInt / 60))) >= 24) {
      hourInt = Math.floor((minuteInt + minuteIncrementInt) / 60) - 1
      minuteInt = minuteInt + minuteIncrementInt % 60

      // checks if minuteInt + minuteIncrementInt exceeds 59
    } else if (minuteInt + minuteIncrementInt >= 60) {
      hourInt = Math.floor((minuteInt + minuteIncrementInt) / 60) + hourInt;
      minuteInt = (minuteInt + minuteIncrementInt) % 60;

      // checks if the minute is <= 60
    } else if (minuteInt + minuteIncrementInt < 60) {
      minuteInt += minuteIncrementInt;
    }

    // convert minuteInt and hourInt to a string to be stored into the time slot array.
    let minuteStr = minuteInt.toString().padStart(2, '0');
    let hourStr = hourInt.toString().padStart(2, '0');

    timeSlotArray.push({id: i, hour: hourStr, minute: minuteStr});
    
  }
  return timeSlotArray;
}

// Takes in the generated time slot array and shuffled name array and outputs
// the shuffled name array with time slots in an object.
export const addTimeSlotsToShuffledArray = (timeSlotsArray, shuffledNameArray) => {
  let randomTimeSlotAndNameArray = [];

  for (let i = 0; i < shuffledNameArray.length; i++) {
    let idTimeNameObject = {id: i, time: timeSlotsArray[i], name: shuffledNameArray[i]};
    randomTimeSlotAndNameArray.push(idTimeNameObject);
  }
  
  return randomTimeSlotAndNameArray;
}