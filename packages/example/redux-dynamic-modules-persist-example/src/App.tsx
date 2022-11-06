import React from "react";
import CounterModule from "./Counter/CounterModule";

import "./App.css";

function App() {
  const [mountCounter, setMountCounter] = React.useState(false);
  return (
    <div className="App">
      <input
        title="Mount counter"
        type="checkbox"
        id="persist"
        name="persist"
        onChange={e => {
          setMountCounter(e.target.checked);
        }}
      />
      {mountCounter && <CounterModule />}
    </div>
  );
}

export default App;
