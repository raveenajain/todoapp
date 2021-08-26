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


  const taskList = document.getElementById('tasks').children;
  for (let i = 0; i < taskList.length; i++) {
    let curTask = taskList[i];
    let curBottom = curTask.style.borderBottomColor;
    let curDecor = curTask.style.textDecorationColor;
    // classic to new
    if (prevTheme === 'classic') {
      if (newTheme === 'extreme') {
        if (curBottom === classicRed || curDecor === classicRed) {
          curTask.style.borderBottomColor = extremeRed;
          curTask.style.textDecorationColor = extremeRed;
        } else if (curBottom === classicYellow || curDecor === classicYellow) {
          curTask.style.borderBottomColor = extremeOrange;
          curTask.style.textDecorationColor = extremeOrange;
        } else if (curBottom === classicBlue || curDecor === classicBlue) {
          curTask.style.borderBottomColor = extremeBlue;
          curTask.style.textDecorationColor = extremeBlue;
        }
      } else if (newTheme === 'cool') {
        if (curBottom === classicRed || curDecor === classicRed) {
          curTask.style.borderBottomColor = coolPurple;
          curTask.style.textDecorationColor = coolPurple;
        } else if (curBottom === classicYellow || curDecor === classicYellow) {
          curTask.style.borderBottomColor = coolLightBlue;
          curTask.style.textDecorationColor = coolLightBlue;
        } else if (curBottom === classicBlue || curDecor === classicBlue) {
          curTask.style.borderBottomColor = coolBlue;
          curTask.style.textDecorationColor = coolBlue;
        }
      } else if (newTheme === 'warm') {
        if (curBottom === classicRed || curDecor === classicRed) {
          curTask.style.borderBottomColor = warmRed;
          curTask.style.textDecorationColor = warmRed;
        } else if (curBottom === classicYellow || curDecor === classicYellow) {
          curTask.style.borderBottomColor = warmYellow;
          curTask.style.textDecorationColor = warmYellow;
        } else if (curBottom === classicBlue || curDecor === classicBlue) {
          curTask.style.borderBottomColor = warmOrange;
          curTask.style.textDecorationColor = warmOrange;
        }
      }
    // extreme to new
    } else if (prevTheme === 'extreme') {
      if (newTheme === 'classic') {
        if ((curBottom === extremeRed || curBottom === extremePink) || (curDecor === extremeRed || curDecor === extremePink)) {
          curTask.style.borderBottomColor = classicRed;
          curTask.style.textDecorationColor = classicRed;
        } else if ((curBottom === extremeOrange || curBottom === extremeGreen) || (curDecor === extremeOrange || curDecor === extremeGreen)) {
          curTask.style.borderBottomColor = classicYellow;
          curTask.style.textDecorationColor = classicYellow;
        } else if ((curBottom === extremePurple || curBottom === extremeBlue) || (curDecor === extremePurple || curDecor === extremeBlue)) {
          curTask.style.borderBottomColor = classicBlue;
          curTask.style.textDecorationColor = classicBlue;
        }
      } else if (newTheme === 'cool') {
        if ((curBottom === extremeRed || curBottom === extremePurple) || (curDecor === extremeRed || curDecor === extremePurple)) {
          curTask.style.borderBottomColor = coolPurple;
          curTask.style.textDecorationColor = coolPurple;
        } else if ((curBottom === extremeOrange || curBottom === extremePink) || (curDecor === extremeOrange || curDecor === extremePink)) {
          curTask.style.borderBottomColor = coolLightPurple;
          curTask.style.textDecorationColor = coolLightPurple;
        } else if (curBottom === extremeBlue || curDecor === extremeBlue) {
          curTask.style.borderBottomColor = coolBlue;
          curTask.style.textDecorationColor = coolBlue;
        } else if (curBottom === extremeGreen || curDecor === extremeGreen) {
          curTask.style.borderBottomColor = coolLightBlue;
          curTask.style.textDecorationColor = coolLightBlue;
        }
      } else if (newTheme === 'warm') {
        if ((curBottom === extremeRed || curBottom === extremePurple) || (curDecor === extremeRed || curDecor === extremePurple)) {
          curTask.style.borderBottomColor = warmRed;
          curTask.style.textDecorationColor = warmRed;
        } else if (curBottom === extremeOrange || curDecor === extremeOrange) {
          curTask.style.borderBottomColor = warmOrange;
          curTask.style.textDecorationColor = warmOrange;
        } else if ((curBottom === extremePink || curBottom === extremeBlue) || (curDecor === extremePink || curDecor === extremeBlue)) {
          curTask.style.borderBottomColor = warmGolden;
          curTask.style.textDecorationColor = warmGolden;
        } else if (curBottom === extremeGreen || curDecor === extremeGreen) {
          curTask.style.borderBottomColor = warmYellow;
          curTask.style.textDecorationColor = warmYellow;
        }
      }
    // cool to new
    } else if (prevTheme === 'cool') {
      if (newTheme === 'classic') {
        if (curBottom === coolPurple || curDecor === coolPurple) {
          curTask.style.borderBottomColor = classicRed;
          curTask.style.textDecorationColor = classicRed;
        } else if ((curBottom === coolLightBlue || curBottom === coolLightPurple) || (curDecor === coolLightBlue || curDecor === coolLightPurple)) {
          curTask.style.borderBottomColor = classicYellow;
          curTask.style.textDecorationColor = classicYellow;
        } else if (curBottom === coolBlue || curDecor === coolBlue) {
          curTask.style.borderBottomColor = classicBlue;
          curTask.style.textDecorationColor = classicBlue;
        }
      } else if (newTheme === 'extreme') {
        if (curBottom === coolPurple || curDecor === coolPurple) {
          curTask.style.borderBottomColor = extremePurple;
          curTask.style.textDecorationColor = extremePurple;
        } else if (curBottom === coolLightBlue || curDecor === coolLightBlue) {
          curTask.style.borderBottomColor = extremeGreen;
          curTask.style.textDecorationColor = extremeGreen;
        } else if (curBottom === coolLightPurple || curDecor === coolLightPurple) {
          curTask.style.borderBottomColor = extremePink;
          curTask.style.textDecorationColor = extremePink;
        } else if (curBottom === coolBlue || curDecor === coolBlue) {
          curTask.style.borderBottomColor = extremeBlue;
          curTask.style.textDecorationColor = extremeBlue;
        }
      } else if (newTheme === 'warm') {
        if (curBottom === coolPurple || curDecor === coolPurple) {
          curTask.style.borderBottomColor = warmRed;
          curTask.style.textDecorationColor = warmRed;
        } else if (curBottom === coolLightBlue || curDecor === coolLightBlue) {
          curTask.style.borderBottomColor = warmGolden;
          curTask.style.textDecorationColor = warmGolden;
        } else if (curBottom === coolLightPurple || curDecor === coolLightPurple) {
          curTask.style.borderBottomColor = warmYellow;
          curTask.style.textDecorationColor = warmYellow;
        } else if (curBottom === coolBlue || curDecor === coolBlue) {
          curTask.style.borderBottomColor = warmOrange;
          curTask.style.textDecorationColor = warmOrange;
        }
      }
    // warm to new
    } else if (prevTheme === 'warm') {
      if (newTheme === 'classic') {
        if (curBottom === warmRed || curDecor === warmRed) {
          curTask.style.borderBottomColor = classicRed;
          curTask.style.textDecorationColor = classicRed;
        } else if (curBottom === warmOrange || curDecor === warmOrange) {
          curTask.style.borderBottomColor = classicBlue;
          curTask.style.textDecorationColor = classicBlue;
        } else if ((curBottom === warmGolden || curBottom === warmYellow) || (curDecor === warmGolden || curDecor === warmYellow)) {
          curTask.style.borderBottomColor = classicYellow;
          curTask.style.textDecorationColor = classicYellow;
        }
      } else if (newTheme === 'extreme') {
        if (curBottom === warmRed || curDecor === warmRed) {
          curTask.style.borderBottomColor = extremeRed;
          curTask.style.textDecorationColor = extremeRed;
        } else if (curBottom === warmOrange || curDecor === warmOrange) {
          curTask.style.borderBottomColor = extremeOrange;
          curTask.style.textDecorationColor = extremeOrange;
        } else if (curBottom === warmGolden || curDecor === warmGolden) {
          curTask.style.borderBottomColor = extremePink;
          curTask.style.textDecorationColor = extremePink;
        } else if (curBottom === warmYellow || curDecor === warmYellow) {
          curTask.style.borderBottomColor = extremeGreen;
          curTask.style.textDecorationColor = extremeGreen;
        }
      } else if (newTheme === 'cool') {
        if (curBottom === warmRed || curDecor === warmRed) {
          curTask.style.borderBottomColor = coolPurple;
          curTask.style.textDecorationColor = coolPurple;
        } else if (curBottom === warmOrange || curDecor === warmOrange) {
          curTask.style.borderBottomColor = coolBlue;
          curTask.style.textDecorationColor = coolBlue;
        } else if (curBottom === warmGolden || curDecor === warmGolden) {
          curTask.style.borderBottomColor = coolLightBlue;
          curTask.style.textDecorationColor = coolLightBlue;
        } else if (curBottom === warmYellow || curDecor === warmYellow) {
          curTask.style.borderBottomColor = coolLightPurple;
          curTask.style.textDecorationColor = coolLightPurple;
        }
      }
    }
  }
}

export default changeExistingTaskColors;
