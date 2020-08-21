import React, { useState } from "react";

function App() {
  const time_val = new Date().toLocaleTimeString();
  let [time, setState] = useState(time_val);

  // setInterval(getTime, 1000);

  function getTime() {
    time = new Date().toLocaleTimeString();
    console.log(time);
    setState(time);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
