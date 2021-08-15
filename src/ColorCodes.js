import React, {useState, useEffect} from "react";
import './style.css';

function ColorCodes() {
  const[code, setCode] = useState();

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

  return (
    <div className="ColorCodes">
      <div id="curColor" value={code}>

        <div id="codeClassic" style={{display: "block"}}>
          <select value={code} name="code" onChange={handleChange}>
            <option value="classicRed">Red</option>
            <option value="classicYellow">Yellow</option>
            <option value="classicBlue">Blue</option>
          </select>
        </div>

        <div id="codeExtreme" style={{display: "none"}}>
          <select value={code} name="code" onChange={handleChange}>
            <option value="extremeRed">Red</option>
            <option value="extremeOrange">Orange</option>
            <option value="extremePink">Pink</option>
            <option value="extremePurple">Purple</option>
            <option value="extremeBlue">Blue</option>
            <option value="extremeGreen">Green</option>
          </select>
        </div>

        <div id="codeCool" style={{display: "none"}}>
          <select value={code} name="code" onChange={handleChange}>
            <option value="coolPurple">Purple</option>
            <option value="coolLightPurple">Light Purple</option>
            <option value="coolLightBlue">Light Blue</option>
            <option value="coolBlue">Blue</option>
          </select>
        </div>

        <div id="codeWarm" style={{display: "none"}}>
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
