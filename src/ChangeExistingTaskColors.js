import React from "react";
import './style.css';
import globalColors from './GlobalColors';

// change the underline or strikethrough colors if the theme of the app is changed
// hex color match with colors in AddTasks
const changeExistingTaskColors = function(prevTheme, newTheme) {
  // list of colors
  const classicRed = globalColors('classicRed');
  const classicYellow = globalColors('classicYellow');
  const classicBlue = globalColors('classicBlue');
  const extremeRed = globalColors('extremeRed');
  const extremePink = globalColors('extremePink');
  const extremeOrange = globalColors('extremeOrange');
  const extremeGreen = globalColors('extremeGreen');
  const extremePurple = globalColors('extremePurple');
  const extremeBlue = globalColors('extremeBlue');
  const coolPurple = globalColors('coolPurple');
  const coolBlue = globalColors('coolBlue');
  const coolLightBlue = globalColors('coolLightBlue');
  const coolLightPurple = globalColors('coolLightPurple');
  const warmRed = globalColors('warmRed');
  const warmOrange = globalColors('warmOrange');
  const warmGolden = globalColors('warmGolden');
  const warmYellow = globalColors('warmYellow');
  const linesSolid = globalColors('linesPurple');
  const linesDot = globalColors('linesRed');
  const linesDouble = globalColors('linesYellow');

  let lastClassic = 'classicRed';
  let lastExtreme = 'extremeRed';
  let lastCool = 'coolPurple';
  let lastWarm = 'warmRed';
  let lastLines = 'linesSolid';

  const taskList = document.getElementById('tasks').children;
  for (let i = 0; i < taskList.length; i++) {
    let curTask = taskList[i];
    let curBottom = curTask.children[1].style.borderBottomColor;
    let curDecor = curTask.children[1].style.textDecorationColor;

    // classic to new
    if (prevTheme === 'classic') {
      if (newTheme === 'extreme') {
        document.getElementById('curColor').setAttribute('value', lastExtreme);
        lastExtreme = document.getElementById('codeExtreme').getAttribute('value');
        if (curBottom === classicRed || curDecor === classicRed) {
          curTask.children[1].style.borderBottomColor = extremeRed;
          curTask.children[1].style.textDecorationColor = extremeRed;
        } else if (curBottom === classicYellow || curDecor === classicYellow) {
          curTask.children[1].style.borderBottomColor = extremeOrange;
          curTask.children[1].style.textDecorationColor = extremeOrange;
        } else if (curBottom === classicBlue || curDecor === classicBlue) {
          curTask.children[1].style.borderBottomColor = extremeBlue;
          curTask.children[1].style.textDecorationColor = extremeBlue;
        }
      } else if (newTheme === 'cool') {
        document.getElementById('curColor').setAttribute('value', lastCool);
        lastCool = document.getElementById('codeCool').getAttribute('value');
        if (curBottom === classicRed || curDecor === classicRed) {
          curTask.children[1].style.borderBottomColor = coolPurple;
          curTask.children[1].style.textDecorationColor = coolPurple;
        } else if (curBottom === classicYellow || curDecor === classicYellow) {
          curTask.children[1].style.borderBottomColor = coolLightBlue;
          curTask.children[1].style.textDecorationColor = coolLightBlue;
        } else if (curBottom === classicBlue || curDecor === classicBlue) {
          curTask.children[1].style.borderBottomColor = coolBlue;
          curTask.children[1].style.textDecorationColor = coolBlue;
        }
      } else if (newTheme === 'warm') {
        document.getElementById('curColor').setAttribute('value', lastWarm);
        lastWarm = document.getElementById('codeWarm').getAttribute('value');
        if (curBottom === classicRed || curDecor === classicRed) {
          curTask.children[1].style.borderBottomColor = warmRed;
          curTask.children[1].style.textDecorationColor = warmRed;
        } else if (curBottom === classicYellow || curDecor === classicYellow) {
          curTask.children[1].style.borderBottomColor = warmYellow;
          curTask.children[1].style.textDecorationColor = warmYellow;
        } else if (curBottom === classicBlue || curDecor === classicBlue) {
          curTask.children[1].style.borderBottomColor = warmOrange;
          curTask.children[1].style.textDecorationColor = warmOrange;
        }
      } else if (newTheme === 'lines') {
        document.getElementById('curColor').setAttribute('value', lastLines);
        lastLines = document.getElementById('codeLines').getAttribute('value');
        if (curBottom === classicRed || curDecor === classicRed) {
          curTask.children[1].style.borderBottomColor = linesDot;
          curTask.children[1].style.textDecorationColor = linesDot;
          curTask.children[1].style.borderBottomStyle = 'dotted';
        } else if (curBottom === classicYellow || curDecor === classicYellow) {
          curTask.children[1].style.borderBottomColor = linesDouble;
          curTask.children[1].style.textDecorationColor = linesDouble;
          curTask.children[1].style.borderBottomStyle = 'double';
        } else if (curBottom === classicBlue || curDecor === classicBlue) {
          curTask.children[1].style.borderBottomColor = linesSolid;
          curTask.children[1].style.textDecorationColor = linesSolid;
        }
      }
    // extreme to new
    } else if (prevTheme === 'extreme') {
      if (newTheme === 'classic') {
        document.getElementById('curColor').setAttribute('value', lastClassic);
        lastClassic = document.getElementById('codeClassic').getAttribute('value');
        if ((curBottom === extremeRed || curBottom === extremePink) || (curDecor === extremeRed || curDecor === extremePink)) {
          curTask.children[1].style.borderBottomColor = classicRed;
          curTask.children[1].style.textDecorationColor = classicRed;
        } else if ((curBottom === extremeOrange || curBottom === extremeGreen) || (curDecor === extremeOrange || curDecor === extremeGreen)) {
          curTask.children[1].style.borderBottomColor = classicYellow;
          curTask.children[1].style.textDecorationColor = classicYellow;
        } else if ((curBottom === extremePurple || curBottom === extremeBlue) || (curDecor === extremePurple || curDecor === extremeBlue)) {
          curTask.children[1].style.borderBottomColor = classicBlue;
          curTask.children[1].style.textDecorationColor = classicBlue;
        }
      } else if (newTheme === 'cool') {
        document.getElementById('curColor').setAttribute('value', lastCool);
        lastCool = document.getElementById('codeCool').getAttribute('value');
        if ((curBottom === extremeRed || curBottom === extremePurple) || (curDecor === extremeRed || curDecor === extremePurple)) {
          curTask.children[1].style.borderBottomColor = coolPurple;
          curTask.children[1].style.textDecorationColor = coolPurple;
        } else if ((curBottom === extremeOrange || curBottom === extremePink) || (curDecor === extremeOrange || curDecor === extremePink)) {
          curTask.children[1].style.borderBottomColor = coolLightPurple;
          curTask.children[1].style.textDecorationColor = coolLightPurple;
        } else if (curBottom === extremeBlue || curDecor === extremeBlue) {
          curTask.children[1].style.borderBottomColor = coolBlue;
          curTask.children[1].style.textDecorationColor = coolBlue;
        } else if (curBottom === extremeGreen || curDecor === extremeGreen) {
          curTask.children[1].style.borderBottomColor = coolLightBlue;
          curTask.children[1].style.textDecorationColor = coolLightBlue;
        }
      } else if (newTheme === 'warm') {
        document.getElementById('curColor').setAttribute('value', lastWarm);
        lastWarm = document.getElementById('codeWarm').getAttribute('value');
        if ((curBottom === extremeRed || curBottom === extremePurple) || (curDecor === extremeRed || curDecor === extremePurple)) {
          curTask.children[1].style.borderBottomColor = warmRed;
          curTask.children[1].style.textDecorationColor = warmRed;
        } else if (curBottom === extremeOrange || curDecor === extremeOrange) {
          curTask.children[1].style.borderBottomColor = warmOrange;
          curTask.children[1].style.textDecorationColor = warmOrange;
        } else if ((curBottom === extremePink || curBottom === extremeBlue) || (curDecor === extremePink || curDecor === extremeBlue)) {
          curTask.children[1].style.borderBottomColor = warmGolden;
          curTask.children[1].style.textDecorationColor = warmGolden;
        } else if (curBottom === extremeGreen || curDecor === extremeGreen) {
          curTask.children[1].style.borderBottomColor = warmYellow;
          curTask.children[1].style.textDecorationColor = warmYellow;
        }
      } else if (newTheme === 'lines') {
        document.getElementById('curColor').setAttribute('value', lastLines);
        lastLines = document.getElementById('codeLines').getAttribute('value');
        if ((curBottom === extremeRed || curBottom === extremePink) || (curDecor === extremeRed || curDecor === extremePink)) {
          curTask.children[1].style.borderBottomColor = linesDot;
          curTask.children[1].style.textDecorationColor = linesDot;
          curTask.children[1].style.borderBottomStyle = 'dotted';
        } else if ((curBottom === extremeOrange || curBottom === extremeGreen) || (curDecor === extremeOrange || curDecor === extremeGreen)) {
          curTask.children[1].style.borderBottomColor = linesDouble;
          curTask.children[1].style.textDecorationColor = linesDouble;
          curTask.children[1].style.borderBottomStyle = 'double';
        } else if ((curBottom === extremePurple || curBottom === extremeBlue) || (curDecor === extremePurple || curDecor === extremeBlue)) {
          curTask.children[1].style.borderBottomColor = linesSolid;
          curTask.children[1].style.textDecorationColor = linesSolid;
        }
      }
    // cool to new
    } else if (prevTheme === 'cool') {
      if (newTheme === 'classic') {
        document.getElementById('curColor').setAttribute('value', lastClassic);
        lastClassic = document.getElementById('codeClassic').getAttribute('value');
        if (curBottom === coolPurple || curDecor === coolPurple) {
          curTask.children[1].style.borderBottomColor = classicRed;
          curTask.children[1].style.textDecorationColor = classicRed;
        } else if ((curBottom === coolLightBlue || curBottom === coolLightPurple) || (curDecor === coolLightBlue || curDecor === coolLightPurple)) {
          curTask.children[1].style.borderBottomColor = classicYellow;
          curTask.children[1].style.textDecorationColor = classicYellow;
        } else if (curBottom === coolBlue || curDecor === coolBlue) {
          curTask.children[1].style.borderBottomColor = classicBlue;
          curTask.children[1].style.textDecorationColor = classicBlue;
        }
      } else if (newTheme === 'extreme') {
        document.getElementById('curColor').setAttribute('value', lastExtreme);
        lastExtreme = document.getElementById('codeExtreme').getAttribute('value');
        if (curBottom === coolPurple || curDecor === coolPurple) {
          curTask.children[1].style.borderBottomColor = extremePurple;
          curTask.children[1].style.textDecorationColor = extremePurple;
        } else if (curBottom === coolLightBlue || curDecor === coolLightBlue) {
          curTask.children[1].style.borderBottomColor = extremeGreen;
          curTask.children[1].style.textDecorationColor = extremeGreen;
        } else if (curBottom === coolLightPurple || curDecor === coolLightPurple) {
          curTask.children[1].style.borderBottomColor = extremePink;
          curTask.children[1].style.textDecorationColor = extremePink;
        } else if (curBottom === coolBlue || curDecor === coolBlue) {
          curTask.children[1].style.borderBottomColor = extremeBlue;
          curTask.children[1].style.textDecorationColor = extremeBlue;
        }
      } else if (newTheme === 'warm') {
        document.getElementById('curColor').setAttribute('value', lastWarm);
        lastWarm = document.getElementById('codeWarm').getAttribute('value');
        if (curBottom === coolPurple || curDecor === coolPurple) {
          curTask.children[1].style.borderBottomColor = warmRed;
          curTask.children[1].style.textDecorationColor = warmRed;
        } else if (curBottom === coolLightBlue || curDecor === coolLightBlue) {
          curTask.children[1].style.borderBottomColor = warmGolden;
          curTask.children[1].style.textDecorationColor = warmGolden;
        } else if (curBottom === coolLightPurple || curDecor === coolLightPurple) {
          curTask.children[1].style.borderBottomColor = warmYellow;
          curTask.children[1].style.textDecorationColor = warmYellow;
        } else if (curBottom === coolBlue || curDecor === coolBlue) {
          curTask.children[1].style.borderBottomColor = warmOrange;
          curTask.children[1].style.textDecorationColor = warmOrange;
        }
      } else if (newTheme === 'lines') {
        document.getElementById('curColor').setAttribute('value', lastLines);
        lastLines = document.getElementById('codeLines').getAttribute('value');
        if (curBottom === coolPurple || curDecor === coolPurple) {
          curTask.children[1].style.borderBottomColor = linesSolid;
          curTask.children[1].style.textDecorationColor = linesSolid;
        } else if ((curBottom === coolLightBlue || curBottom === coolLightPurple) || (curDecor === coolLightBlue || curDecor === coolLightPurple)) {
          curTask.children[1].style.borderBottomColor = linesDouble;
          curTask.children[1].style.textDecorationColor = linesDouble;
          curTask.children[1].style.borderBottomStyle = 'double';
        } else if (curBottom === coolBlue || curDecor === coolBlue) {
          curTask.children[1].style.borderBottomColor = linesDot;
          curTask.children[1].style.textDecorationColor = linesDot;
          curTask.children[1].style.borderBottomStyle = 'dotted';
        }
      }
    // warm to new
    } else if (prevTheme === 'warm') {
      if (newTheme === 'classic') {
        document.getElementById('curColor').setAttribute('value', lastClassic);
        lastClassic = document.getElementById('codeClassic').getAttribute('value');
        if (curBottom === warmRed || curDecor === warmRed) {
          curTask.children[1].style.borderBottomColor = classicRed;
          curTask.children[1].style.textDecorationColor = classicRed;
        } else if (curBottom === warmOrange || curDecor === warmOrange) {
          curTask.children[1].style.borderBottomColor = classicBlue;
          curTask.children[1].style.textDecorationColor = classicBlue;
        } else if ((curBottom === warmGolden || curBottom === warmYellow) || (curDecor === warmGolden || curDecor === warmYellow)) {
          curTask.children[1].style.borderBottomColor = classicYellow;
          curTask.children[1].style.textDecorationColor = classicYellow;
        }
      } else if (newTheme === 'extreme') {
        document.getElementById('curColor').setAttribute('value', lastExtreme);
        lastExtreme = document.getElementById('codeExtreme').getAttribute('value');
        if (curBottom === warmRed || curDecor === warmRed) {
          curTask.children[1].style.borderBottomColor = extremeRed;
          curTask.children[1].style.textDecorationColor = extremeRed;
        } else if (curBottom === warmOrange || curDecor === warmOrange) {
          curTask.children[1].style.borderBottomColor = extremeOrange;
          curTask.children[1].style.textDecorationColor = extremeOrange;
        } else if (curBottom === warmGolden || curDecor === warmGolden) {
          curTask.children[1].style.borderBottomColor = extremePink;
          curTask.children[1].style.textDecorationColor = extremePink;
        } else if (curBottom === warmYellow || curDecor === warmYellow) {
          curTask.children[1].style.borderBottomColor = extremeGreen;
          curTask.children[1].style.textDecorationColor = extremeGreen;
        }
      } else if (newTheme === 'cool') {
        document.getElementById('curColor').setAttribute('value', lastCool);
        lastCool = document.getElementById('codeCool').getAttribute('value');
        if (curBottom === warmRed || curDecor === warmRed) {
          curTask.children[1].style.borderBottomColor = coolPurple;
          curTask.children[1].style.textDecorationColor = coolPurple;
        } else if (curBottom === warmOrange || curDecor === warmOrange) {
          curTask.children[1].style.borderBottomColor = coolBlue;
          curTask.children[1].style.textDecorationColor = coolBlue;
        } else if (curBottom === warmGolden || curDecor === warmGolden) {
          curTask.children[1].style.borderBottomColor = coolLightBlue;
          curTask.children[1].style.textDecorationColor = coolLightBlue;
        } else if (curBottom === warmYellow || curDecor === warmYellow) {
          curTask.children[1].style.borderBottomColor = coolLightPurple;
          curTask.children[1].style.textDecorationColor = coolLightPurple;
        }
      } else if (newTheme === 'lines') {
        document.getElementById('curColor').setAttribute('value', lastLines);
        lastLines = document.getElementById('codeLines').getAttribute('value');
        if (curBottom === warmRed || curDecor === warmRed) {
          curTask.children[1].style.borderBottomColor = linesDot;
          curTask.children[1].style.textDecorationColor = linesDot;
          curTask.children[1].style.borderBottomStyle = 'dotted';
        } else if (curBottom === warmOrange || curDecor === warmOrange) {
          curTask.children[1].style.borderBottomColor = linesSolid;
          curTask.children[1].style.textDecorationColor = linesSolid;
        } else if ((curBottom === warmGolden || curBottom === warmYellow) || (curDecor === warmGolden || curDecor === warmYellow)) {
          curTask.children[1].style.borderBottomColor = linesDouble;
          curTask.children[1].style.textDecorationColor = linesDouble;
          curTask.children[1].style.borderBottomStyle = 'double';
        }
      }
    // lines to new
  } else if (prevTheme === 'lines') {
    curTask.children[1].style.borderBottomStyle = 'solid';
      if (newTheme === 'classic') {
        document.getElementById('curColor').setAttribute('value', lastClassic);
        lastClassic = document.getElementById('codeClassic').getAttribute('value');
        if (curBottom === linesSolid || curDecor === linesSolid) {
          curTask.children[1].style.borderBottomColor = classicBlue;
          curTask.children[1].style.textDecorationColor = classicBlue;
        } else if (curBottom === linesDouble || curDecor === linesDouble) {
          curTask.children[1].style.borderBottomColor = classicYellow;
          curTask.children[1].style.textDecorationColor = classicYellow;
        } else if (curBottom === linesDot || curDecor === linesDot) {
          curTask.children[1].style.borderBottomColor = classicRed;
          curTask.children[1].style.textDecorationColor = classicRed;
        }
      } else if (newTheme === 'extreme') {
        document.getElementById('curColor').setAttribute('value', lastExtreme);
        lastExtreme = document.getElementById('codeExtreme').getAttribute('value');
        if (curBottom === linesSolid || curDecor === linesSolid) {
          curTask.children[1].style.borderBottomColor = extremePurple;
          curTask.children[1].style.textDecorationColor = extremePurple;
        } else if (curBottom === linesDouble || curDecor === linesDouble) {
          curTask.children[1].style.borderBottomColor = extremeOrange;
          curTask.children[1].style.textDecorationColor = extremeOrange;
        } else if (curBottom === linesDot || curDecor === linesDot) {
          curTask.children[1].style.borderBottomColor = extremeRed;
          curTask.children[1].style.textDecorationColor = extremeRed;
        }
      } else if (newTheme === 'cool') {
        document.getElementById('curColor').setAttribute('value', lastCool);
        lastCool = document.getElementById('codeCool').getAttribute('value');
        if (curBottom === linesSolid || curDecor === linesSolid) {
          curTask.children[1].style.borderBottomColor = coolPurple;
          curTask.children[1].style.textDecorationColor = coolPurple;
        } else if (curBottom === linesDouble || curDecor === linesDouble) {
          curTask.children[1].style.borderBottomColor = coolLightBlue;
          curTask.children[1].style.textDecorationColor = coolLightBlue;
        } else if (curBottom === linesDot || curDecor === linesDot) {
          curTask.children[1].style.borderBottomColor = coolBlue;
          curTask.children[1].style.textDecorationColor = coolBlue;
        }
      } else if (newTheme === 'warm') {
        document.getElementById('curColor').setAttribute('value', lastWarm);
        lastWarm = document.getElementById('codeWarm').getAttribute('value');
        if (curBottom === linesSolid || curDecor === linesSolid) {
          curTask.children[1].style.borderBottomColor = warmOrange;
          curTask.children[1].style.textDecorationColor = warmOrange;
        } else if (curBottom === linesDouble || curDecor === linesDouble) {
          curTask.children[1].style.borderBottomColor = warmYellow;
          curTask.children[1].style.textDecorationColor = warmYellow;
        } else if (curBottom === linesDot || curDecor === linesDot) {
          curTask.children[1].style.borderBottomColor = warmRed;
          curTask.children[1].style.textDecorationColor = warmRed;
        }
      }
    }
  }
}

export default changeExistingTaskColors;
