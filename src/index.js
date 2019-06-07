import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [isOn, isSetOn] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (isOn) {
      interval = setInterval(() => setTimer(timer => timer + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isOn]);

  const reset = () => {
    isSetOn(false);
    setTimer(0);
  };

  return (
    <div className="App">
      <div>{timer}</div>
      {!isOn && <button onClick={() => isSetOn(true)}>start</button>}
      {isOn && <button onClick={() => isSetOn(false)}>stop</button>}
      <button disabled={timer === 0} onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
