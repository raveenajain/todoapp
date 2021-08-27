import React, {useState, useEffect} from "react";
import './style.css';

function ColorCodes() {
  const[code, setCode] = useState();

  // shows the correct dropdown options in the AddTask pop up window depending on the current theme
  useEffect(() => {
    if (document.getElementById('theme').getAttribute('value') === "classic") {
      document.getElementById('codeClassic').style.display = "block";
      document.getElementById('codeExtreme').style.display = "none";
      document.getElementById('codeCool').style.display = "none";
      document.getElementById('codeWarm').style.display = "none";
    } else if (document.getElementById('theme').getAttribute('value') === "extreme") {
      document.getElementById('codeClassic').style.display = "none";
      document.getElementById('codeExtreme').style.display = "block";
      document.getElementById('codeCool').style.display = "none";
      document.getElementById('codeWarm').style.display = "none";
    } else if (document.getElementById('theme').getAttribute('value') === "cool") {
      document.getElementById('codeClassic').style.display = "none";
      document.getElementById('codeExtreme').style.display = "none";
      document.getElementById('codeCool').style.display = "block";
      document.getElementById('codeWarm').style.display = "none";
    } else if (document.getElementById('theme').getAttribute('value') === "warm") {
      document.getElementById('codeClassic').style.display = "none";
      document.getElementById('codeExtreme').style.display = "none";
      document.getElementById('codeCool').style.display = "none";
      document.getElementById('codeWarm').style.display = "block";
    }
  });

  function handleChange(event) {
    setCode(event.target.value);
  }

  // only sets the value if its one of the color options for the selected theme
  function setClassicCode(c) {
    if (c === 'classicRed' || c === 'classicBlue' || c === 'classicYellow') {
      return c;
    } else {
      return 'classicRed';
    }
  }
  function setExtremeCode(c) {
    if (c === 'extremeRed' || c === 'extremeBlue' || c === 'extremePink' || c === 'extremeGreen' || c === 'extremeOrange' || c === 'extremePurple') {
      return c;
    } else {
      return 'extremePurple';
    }
  }
  function setCoolCode(c) {
    if (c === 'coolLightBlue' || c === 'coolBlue' || c === 'coolPurple' || c === 'coolLightPurple') {
      return c;
    } else {
      return 'coolPurple';
    }
  }
  function setWarmCode(c) {
    if (c === 'warmRed' || c === 'warmGolden' || c === 'warmOrange' || c === 'warmYellow') {
      return c;
    } else {
      return 'warmRed';
    }
  }

  return (
    <div className="ColorCodes">
      <div id="curColor" value={code}>

        <div id="codeClassic" style={{display: "none"}} value={setClassicCode(code)}>
          <select value={code} name="code" onChange={handleChange}>
            <option value="classicRed">Red</option>
            <option value="classicYellow">Yellow</option>
            <option value="classicBlue">Blue</option>
          </select>
        </div>

        <div id="codeExtreme" style={{display: "none"}} value={setExtremeCode(code)}>
          <select value={code} name="code" onChange={handleChange}>
            <option value="extremeRed">Red</option>
            <option value="extremeOrange">Orange</option>
            <option value="extremePink">Pink</option>
            <option value="extremePurple">Purple</option>
            <option value="extremeBlue">Blue</option>
            <option value="extremeGreen">Green</option>
          </select>
        </div>

        <div id="codeCool" style={{display: "none"}} value={setCoolCode(code)}>
          <select value={code} name="code" onChange={handleChange}>
            <option value="coolPurple">Purple</option>
            <option value="coolLightPurple">Light Purple</option>
            <option value="coolLightBlue">Light Blue</option>
            <option value="coolBlue">Blue</option>
          </select>
        </div>

        <div id="codeWarm" style={{display: "none"}} value={setWarmCode(code)}>
          <select value={code} name="code" onChange={handleChange}>
            <option value="warmRed">Red</option>
            <option value="warmOrange">Orange</option>
            <option value="warmGolden">Golden</option>
            <option value="warmYellow">Yellow</option>
          </select>
        </div>

      </div>

    </div>
  )
}

export default ColorCodes;
