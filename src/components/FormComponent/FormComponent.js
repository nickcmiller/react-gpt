import React, { useState } from 'react';

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
      <label className="input">
        Name:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <input className="submit" type="submit" value="Submit" />
    </form>
  );
}

export default FormComponent;