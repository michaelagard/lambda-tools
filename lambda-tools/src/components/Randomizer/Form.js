import React, {useState} from 'react';
import { useInput } from './hooks/input-hook';

function Form() {
  const {state, setState } = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting State ${state}`);
    reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <textarea {...bind} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}