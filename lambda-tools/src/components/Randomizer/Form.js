import React from 'react';
import Output from './Output';
import { useInput } from './hooks/input-hook';

export default function Form() {
  const {value, bind, reset } = useInput('');
  const randomize = (value) => {
    let randomArray = value.split(`\n`).sort(() => Math.random() - 0.5);
    return randomArray;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Name ${value}`);
    reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <textarea {...bind} />
      </label>
      <input type="submit" value="Submit" />
      <Output output={randomize(value)}/>
    </form>
  );
}