import React from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import FormComponent from '../FormComponent/FormComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to code in React right now
        </a>
        
      </header>
    </div>
  );
}

export default App;