import React, {useState} from "react";
import './style.css';
import Themes from './Themes';
import AddWindow from './AddWindow';

function App() {

  return (
    <div className="App">

      {/* to do header and dropdown to change the theme */}
      <Themes />

      {/* add tasks button and pop up*/}
      <AddWindow />

      {/* lists of tasks users will add*/}
      <div id="tasks">
        <div id="noTasks">
          You have nothing to do...
          <br></br>enjoy your free time!
        </div>
        <div id="newTasks"></div>
      </div>

    </div>
  );
}

export default App;

// main resource: https://scrimba.com/learn/learnreact
