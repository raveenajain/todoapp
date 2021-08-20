import React, {useState} from "react";
import './style.css';
import changeExistingTaskColors from './ChangeExistingTaskColors';

function Themes() {
  const[theme, setTheme] = useState("classic");
  const[headerBack, setHeaderBack] = useState("linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,230,0,1) 37%, rgba(224,208,65,1) 69%, rgba(15,48,255,1) 96%)");

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
      setHeaderBack("linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,230,0,1) 37%, rgba(224,208,65,1) 72%, rgba(15,48,255,1) 96%)");
    } else if (value === "extreme") {
      setHeaderBack("linear-gradient(90deg, rgba(248,56,18,1) 0%, rgba(238,150,75,1) 20%, rgba(230,170,206,1) 40%, rgba(111,88,201,1) 60%, rgba(81,229,255,1) 80%, rgba(129,244,153,1) 100%)");
    } else if (value === "cool") {
      setHeaderBack("linear-gradient(90deg, rgba(95,79,147,1) 0%, rgba(213,210,255,1) 33%, rgba(206,228,253,1) 67%, rgba(77,102,156,1) 100%)");
    } else if (value === "warm") {
      setHeaderBack("linear-gradient(90deg, rgba(145,0,0,1) 0%, rgba(255,178,0,1) 33%, rgba(255,224,138,1) 67%, rgba(212,78,0,1) 100%)");
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
