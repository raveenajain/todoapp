import React, {useState} from "react";

// to be able to consistently change colors used for the different themes across different .js files
const globalColors = function(color) {
  const colorMap = new Map();

  colorMap.set('classicRed', 'rgb(255, 0, 0)');
  colorMap.set('classicYellow', 'rgb(255, 230, 0)');
  colorMap.set('classicBlue', 'rgb(15, 47, 255)');

  colorMap.set('extremeRed', 'rgb(248, 56, 18)');
  colorMap.set('extremePink', 'rgb(230, 170, 206)');
  colorMap.set('extremeOrange', 'rgb(238, 151, 75)');
  colorMap.set('extremeGreen', 'rgb(129, 244, 154)');
  colorMap.set('extremePurple', 'rgb(111, 88, 201)');
  colorMap.set('extremeBlue', 'rgb(81, 229, 255)');

  colorMap.set('coolPurple', 'rgb(95, 79, 147)');
  colorMap.set('coolLightPurple', 'rgb(206, 228, 253)');
  colorMap.set('coolLightBlue', 'rgb(213, 210, 255)');
  colorMap.set('coolBlue', 'rgb(77, 102, 156)');

  colorMap.set('warmRed', 'rgb(145, 0, 0)');
  colorMap.set('warmOrange', 'rgb(212, 78, 0)');
  colorMap.set('warmGolden', 'rgb(255, 179, 0)');
  colorMap.set('warmYellow', 'rgb(255, 224, 138)');

  return colorMap.get(color);
}

export default globalColors;
