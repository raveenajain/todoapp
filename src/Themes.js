import React, {useState} from "react";
import './style.css';
import changeExistingTaskColors from './ChangeExistingTaskColors';
import globalColors from './GlobalColors';

function Themes() {
  const[theme, setTheme] = useState("classic");
  const[headerBack, setHeaderBack] = useState("linear-gradient(90deg," + globalColors('classicRed') + "0%, " + globalColors('classicYellow') + "37%, rgba(224,208,65,1) 69%, " + globalColors('classicBlue') + "96%)");

  // theme dropdown handler
  function handleChange(event) {
    const {value} = event.target;
    setTheme(value);
    changeTheme(value);
    changeExistingTaskColors(theme, value); // previous theme, new theme
  }

  // changes the color of the to do header
  function changeTheme(value) {
    // change header background
    if (value === "classic") {
      setHeaderBack("linear-gradient(90deg," + globalColors('classicRed') + "0%, " + globalColors('classicYellow') + "37%, rgba(224,208,65,1) 69%, " + globalColors('classicBlue') + "96%)");
    } else if (value === "extreme") {
      setHeaderBack("linear-gradient(90deg, " + globalColors('extremeRed') + "0%, " + globalColors('extremeOrange') + "20%, " + globalColors('extremePink') + "40%, " + globalColors('extremePurple') + "60%, " + globalColors('extremeBlue') + "80%, " + globalColors('extremeGreen') + "100%)");
    } else if (value === "cool") {
      setHeaderBack("linear-gradient(90deg, " + globalColors('coolPurple') + "0%, " + globalColors('coolLightPurple') + "33%, " + globalColors('coolLightBlue') + "67%, " + globalColors('coolBlue') + "100%)");
    } else if (value === "warm") {
      setHeaderBack("linear-gradient(90deg, " + globalColors('warmRed') + "0%, " + globalColors('warmGolden') + "33%, " + globalColors('warmYellow') + "67%, " + globalColors('warmOrange') + "100%)");
    }
  }

  return (
    <div className="Themes">

      <div id="header" style={{background: headerBack}}>
        To Do
      </div>

      {/* dropdown */}
      <div id="theme" value={theme}>
        Current Theme:&nbsp;
        <select value={theme} name="theme" onChange={handleChange}>
          <option value="classic">Classic</option>
          <option value="extreme">Extreme</option>
          <option value="cool">Cool</option>
          <option value="warm">Warm</option>
        </select>
      </div>

    </div>
  )
}

export default Themes;

// help with generating gradient code: https://cssgradient.io/
