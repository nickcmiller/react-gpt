import React, { useState } from 'react';
import './FormComponent.css';

function FormComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-field">
        <label className="input-label">
          Input
        </label>
        <input className="input" type="text" value={inputValue} onChange={handleChange} />
      </div>
      <input className="submit" type="submit" value="Submit" />
    </form>
  );
}

export default FormComponent;