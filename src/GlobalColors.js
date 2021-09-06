// to be able to consistently change colors used for the different themes across different .js files
const globalColors = function(color) {
  const colorMap = new Map();

  colorMap.set('classicRed', 'rgb(227, 15, 0)');
  colorMap.set('classicYellow', 'rgb(250, 225, 0)');
  colorMap.set('classicBlue', 'rgb(0, 30, 227)');

  colorMap.set('extremeRed', 'rgb(255, 10, 10)');
  colorMap.set('extremePink', 'rgb(230, 158, 201)');
  colorMap.set('extremeOrange', 'rgb(255, 141, 10)');
  colorMap.set('extremeGreen', 'rgb(114, 232, 139)');
  colorMap.set('extremePurple', 'rgb(141, 88, 201)');
  colorMap.set('extremeBlue', 'rgb(67, 210, 250)');

  colorMap.set('coolPurple', 'rgb(130, 79, 179)');
  colorMap.set('coolLightBlue', 'rgb(187, 195, 237)');
  colorMap.set('coolLightPurple', 'rgb(205, 184, 224)');
  colorMap.set('coolBlue', 'rgb(65, 77, 156)');

  colorMap.set('warmRed', 'rgb(158, 13, 13)');
  colorMap.set('warmOrange', 'rgb(240, 108, 0)');
  colorMap.set('warmGolden', 'rgb(232, 178, 0)');
  colorMap.set('warmYellow', 'rgb(237, 220, 121)');

  colorMap.set('linesPurple', 'rgb(189, 66, 255)'); // linesSolid
  colorMap.set('linesRed', 'rgb(255, 66, 66)'); // linesDot
  colorMap.set('linesYellow', 'rgb(232, 178, 0)'); // linesDouble

  return colorMap.get(color);
}

export default globalColors;
