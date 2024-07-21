import React, {useState, useRef, useEffect} from 'react';
import logo from './bomb.svg';
import './App.css';
import ControlPanel from "./ControlPanel";
import Field from "./Field";

function App() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const timerRef = useRef(null);
    const startTimer = () => {
        if (!isActive) {
            setIsActive(true);
            timerRef.current = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
                }, 1000
            );
            console.log(seconds);
        } return seconds
    };
    const stopTimer = () => {
       if (isActive) {
           clearInterval(timerRef.current);
           setIsActive(false);
       }
    };

    useEffect(() => {
        return () => clearInterval(timerRef.current);
    }, []);

  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <p>Minesweeper</p>
              <ControlPanel timer={seconds}/>
              <Field startTimer={startTimer} stopTimer={stopTimer}/>
          </header>
      </div>
  );
}

export default App;
