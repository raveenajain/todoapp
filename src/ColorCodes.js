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

  function changeCode(event) {
    setCode(event.target.value);
  }

  return (
    <div className="ColorCodes">

      <div id="codeClassic" style={{display: "block"}}>
        <select value={code} name="code" onChange={changeCode}>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <div id="codeExtreme" style={{display: "none"}}>
        <select value={code} name="code" onChange={changeCode}>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="pink">Pink</option>
          <option value="purple">Purple</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </div>

      <div id="codeCool" style={{display: "none"}}>
        <select value={code} name="code" onChange={changeCode}>
          <option value="purple">Purple</option>
          <option value="lightPurple">Light Purple</option>
          <option value="lightBlue">Light Blue</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <div id="codeWarm" style={{display: "none"}}>
        <select value={code} name="code" onChange={changeCode}>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="golden">Golden</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>

    </div>
  )
}

export default ColorCodes;
