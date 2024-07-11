import React from 'react';
import logo from './bomb.svg';
import './App.css';
import ControlPanel from "./ControlPanel";
import Field from "./Field";

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <p>Minesweeper</p>
              <ControlPanel/>
              <Field/>
          </header>
      </div>
  );
}

export default App;
