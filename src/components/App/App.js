import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './App.css';
import FormComponent from '../FormComponent/FormComponent.js';
import SideBar from '../SideBar/SideBar.js';

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <header className="App-header">
          
          <Routes>
            <Route path="/form" element={<FormComponent />} />
            <Route path="/" element={
              <>
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
              </>
            } />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;