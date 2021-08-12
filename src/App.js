import React, {useState, useRef} from "react"
import './style.css';

function App() {
  const[theme, setTheme] = useState("classic");
  const[headerBack, setHeaderBack] = useState("linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,230,0,1) 37%, rgba(224,208,65,1) 69%, rgba(15,48,255,1) 96%)");

  function changeTheme(event) {
    const {value} = event.target
    setTheme(value);
    if (value === "classic") {
      setHeaderBack("linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,230,0,1) 37%, rgba(224,208,65,1) 72%, rgba(15,48,255,1) 96%)");
    }
    if (value === "muted") {
      setHeaderBack("linear-gradient(90deg, rgba(185,25,0,1) 0%, rgba(255,210,95,1) 37%, rgba(255,195,43,1) 72%, rgba(10,70,180,1) 96%)");
    }
    if (value === "extreme") {
      setHeaderBack("linear-gradient(90deg, rgba(248,56,18,1) 0%, rgba(238,150,75,1) 20%, rgba(230,170,206,1) 40%, rgba(111,88,201,1) 60%, rgba(81,229,255,1) 80%, rgba(129,244,153,1) 100%)");
    }
    if (value === "cool") {
      setHeaderBack("linear-gradient(90deg, rgba(95,79,147,1) 0%, rgba(213,210,255,1) 33%, rgba(206,228,253,1) 67%, rgba(77,102,156,1) 100%)");
    }
    if (value === "warm") {
      setHeaderBack("linear-gradient(90deg, rgba(145,0,0,1) 0%, rgba(255,178,0,1) 33%, rgba(255,224,138,1) 67%, rgba(212,78,0,1) 100%)");
    }
  }

  return (
    <div className="App">

    <div id="header" style={{background: headerBack}}>
      To Do
    </div>

    <div id="topButtons">
      <button id="add">+</button>

      <div id="theme">
        Current Theme:&nbsp;
        <select value={theme} name="theme" onChange={changeTheme}>
          <option value="classic">Classic</option>
          <option value="muted">Muted Classic</option>
          <option value="extreme">Extreme</option>
          <option value="cool">Cool</option>
          <option value="warm">Warm</option>
        </select>
      </div>
    </div>

    <div id="tasks">
      <div id="noTasks">
        You have nothing to do...
        <br></br>enjoy your free time!
      </div>
    </div>

    </div>
  );
}

export default App;

// main resource: https://scrimba.com/learn/learnreact
// help with generating gradient code: https://cssgradient.io/
