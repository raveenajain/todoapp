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
    // classic to new
    if (prevTheme === 'classic') {
      if (newTheme === 'extreme') {
        if (curTask.style.borderBottomColor === classicRed || curTask.style.textDecorationColor === classicRed) {
          curTask.style.borderBottomColor = extremeRed;
          curTask.style.textDecorationColor = extremeRed;
        } else if (curTask.style.borderBottomColor === classicYellow || curTask.style.textDecorationColor === classicYellow) {
          curTask.style.borderBottomColor = extremeOrange;
          curTask.style.textDecorationColor = extremeOrange;
        } else if (curTask.style.borderBottomColor === classicBlue || curTask.style.textDecorationColor === classicBlue) {
          curTask.style.borderBottomColor = extremeBlue;
          curTask.style.textDecorationColor = extremeBlue;
        }
      } else if (newTheme === 'cool') {
        if (curTask.style.borderBottomColor === classicRed || curTask.style.textDecorationColor === classicRed) {
          curTask.style.borderBottomColor = coolPurple;
          curTask.style.textDecorationColor = coolPurple;
        } else if (curTask.style.borderBottomColor === classicYellow || curTask.style.textDecorationColor === classicYellow) {
          curTask.style.borderBottomColor = coolLightBlue;
          curTask.style.textDecorationColor = coolLightBlue;
        } else if (curTask.style.borderBottomColor === classicBlue || curTask.style.textDecorationColor === classicBlue) {
          curTask.style.borderBottomColor = coolBlue;
          curTask.style.textDecorationColor = coolBlue;
        }
      } else if (newTheme === 'warm') {
        if (curTask.style.borderBottomColor === classicRed || curTask.style.textDecorationColor === classicRed) {
          curTask.style.borderBottomColor = warmRed;
          curTask.style.textDecorationColor = warmRed;
        } else if (curTask.style.borderBottomColor === classicYellow || curTask.style.textDecorationColor === classicYellow) {
          curTask.style.borderBottomColor = warmYellow;
          curTask.style.textDecorationColor = warmYellow;
        } else if (curTask.style.borderBottomColor === classicBlue || curTask.style.textDecorationColor === classicBlue) {
          curTask.style.borderBottomColor = warmOrange;
          curTask.style.textDecorationColor = warmOrange;
        }
      }
    // extreme to new
    } else if (prevTheme === 'extreme') {
      if (newTheme === 'classic') {
        if ((curTask.style.borderBottomColor === extremeRed || extremePink) || (curTask.style.textDecorationColor === extremeRed || extremePink)) {
          curTask.style.borderBottomColor = classicRed;
          curTask.style.textDecorationColor = classicRed;
        } else if ((curTask.style.borderBottomColor === extremeOrange || extremeGreen) || (curTask.style.textDecorationColor === extremeOrange || extremeGreen)) {
          curTask.style.borderBottomColor = classicYellow;
          curTask.style.textDecorationColor = classicYellow;
        } else if ((curTask.style.borderBottomColor === extremePurple || extremeBlue) || (curTask.style.textDecorationColor === extremePurple || extremeBlue)) {
          curTask.style.borderBottomColor = classicBlue;
          curTask.style.textDecorationColor = classicBlue;
        }
      } else if (newTheme === 'cool') {
        if ((curTask.style.borderBottomColor === extremeRed || extremePurple) || (curTask.style.textDecorationColor === extremeRed || extremePurple)) {
          curTask.style.borderBottomColor = coolPurple;
          curTask.style.textDecorationColor = coolPurple;
        } else if ((curTask.style.borderBottomColor === extremeOrange || extremePink) || (curTask.style.textDecorationColor === extremeOrange || extremePink)) {
          curTask.style.borderBottomColor = coolLightPurple;
          curTask.style.textDecorationColor = coolLightPurple;
        } else if (curTask.style.borderBottomColor === extremeBlue || curTask.style.textDecorationColor === extremeBlue) {
          curTask.style.borderBottomColor = coolBlue;
          curTask.style.textDecorationColor = coolBlue;
        } else if (curTask.style.borderBottomColor === extremeGreen || curTask.style.textDecorationColor === extremeGreen) {
          curTask.style.borderBottomColor = coolLightBlue;
          curTask.style.textDecorationColor = coolLightBlue;
        }
      } else if (newTheme === 'warm') {
        if ((curTask.style.borderBottomColor === extremeRed || extremePurple) || (curTask.style.textDecorationColor === extremeRed || extremePurple)) {
          curTask.style.borderBottomColor = warmRed;
          curTask.style.textDecorationColor = warmRed;
        } else if (curTask.style.borderBottomColor === extremeOrange || curTask.style.textDecorationColor === extremeOrange) {
          curTask.style.borderBottomColor = warmOrange;
          curTask.style.textDecorationColor = warmOrange;
        } else if ((curTask.style.borderBottomColor === extremePink || extremeBlue) || (curTask.style.textDecorationColor === extremePink || extremeBlue)) {
          curTask.style.borderBottomColor = warmGolden;
          curTask.style.textDecorationColor = warmGolden;
        } else if (curTask.style.borderBottomColor === extremeGreen || curTask.style.textDecorationColor === extremeGreen) {
          curTask.style.borderBottomColor = warmYellow;
          curTask.style.textDecorationColor = warmYellow;
        }
      }
    // cool to new
    } else if (prevTheme === 'cool') {
      if (newTheme === 'classic') {
        if (curTask.style.borderBottomColor === coolPurple || curTask.style.textDecorationColor === coolPurple) {
          curTask.style.borderBottomColor = classicRed;
          curTask.style.textDecorationColor = classicRed;
        } else if ((curTask.style.borderBottomColor === coolLightBlue || coolLightPurple) || (curTask.style.textDecorationColor === coolLightBlue || coolLightPurple)) {
          curTask.style.borderBottomColor = classicYellow;
          curTask.style.textDecorationColor = classicYellow;
        } else if (curTask.style.borderBottomColor === coolBlue || curTask.style.textDecorationColor === coolBlue) {
          curTask.style.borderBottomColor = classicBlue;
          curTask.style.textDecorationColor = classicBlue;
        }
      } else if (newTheme === 'extreme') {
        if (curTask.style.borderBottomColor === coolPurple || curTask.style.textDecorationColor === coolPurple) {
          curTask.style.borderBottomColor = extremePurple;
          curTask.style.textDecorationColor = extremePurple;
        } else if (curTask.style.borderBottomColor === coolLightBlue || curTask.style.textDecorationColor === coolLightBlue) {
          curTask.style.borderBottomColor = extremeGreen;
          curTask.style.textDecorationColor = extremeGreen;
        } else if (curTask.style.borderBottomColor === coolLightPurple || curTask.style.textDecorationColor === coolLightPurple) {
          curTask.style.borderBottomColor = extremePink;
          curTask.style.textDecorationColor = extremePink;
        } else if (curTask.style.borderBottomColor === coolBlue || curTask.style.textDecorationColor === coolBlue) {
          curTask.style.borderBottomColor = extremeBlue;
          curTask.style.textDecorationColor = extremeBlue;
        }
      } else if (newTheme === 'warm') {
        if (curTask.style.borderBottomColor === coolPurple || curTask.style.textDecorationColor === coolPurple) {
          curTask.style.borderBottomColor = warmRed;
          curTask.style.textDecorationColor = warmRed;
        } else if (curTask.style.borderBottomColor === coolLightBlue || curTask.style.textDecorationColor === coolLightBlue) {
          curTask.style.borderBottomColor = warmGolden;
          curTask.style.textDecorationColor = warmGolden;
        } else if (curTask.style.borderBottomColor === coolLightPurple || curTask.style.textDecorationColor === coolLightPurple) {
          curTask.style.borderBottomColor = warmYellow;
          curTask.style.textDecorationColor = warmYellow;
        } else if (curTask.style.borderBottomColor === coolBlue || curTask.style.textDecorationColor === coolBlue) {
          curTask.style.borderBottomColor = warmOrange;
          curTask.style.textDecorationColor = warmOrange;
        }
      }
    // warm to new
    } else if (prevTheme === 'warm') {
      if (newTheme === 'classic') {
        if (curTask.style.borderBottomColor === warmRed || curTask.style.textDecorationColor === warmRed) {
          curTask.style.borderBottomColor = classicRed;
          curTask.style.textDecorationColor = classicRed;
        } else if (curTask.style.borderBottomColor === warmOrange || curTask.style.textDecorationColor === warmOrange) {
          curTask.style.borderBottomColor = classicBlue;
          curTask.style.textDecorationColor = classicBlue;
        } else if ((curTask.style.borderBottomColor === warmGolden || warmYellow) || (curTask.style.textDecorationColor === warmOrange)) {
          curTask.style.borderBottomColor = classicYellow;
          curTask.style.textDecorationColor = classicYellow;
        }
      } else if (newTheme === 'extreme') {
        if (curTask.style.borderBottomColor === warmRed || curTask.style.textDecorationColor === warmRed) {
          curTask.style.borderBottomColor = extremeRed;
          curTask.style.textDecorationColor = extremeRed;
        } else if (curTask.style.borderBottomColor === warmOrange || curTask.style.textDecorationColor === warmOrange) {
          curTask.style.borderBottomColor = extremeOrange;
          curTask.style.textDecorationColor = extremeOrange;
        } else if (curTask.style.borderBottomColor === warmGolden || curTask.style.textDecorationColor === warmGolden) {
          curTask.style.borderBottomColor = extremePink;
          curTask.style.textDecorationColor = extremePink;
        } else if (curTask.style.borderBottomColor === warmYellow || curTask.style.textDecorationColor === warmYellow) {
          curTask.style.borderBottomColor = extremeGreen;
          curTask.style.textDecorationColor = extremeGreen;
        }
      } else if (newTheme === 'cool') {
        if (curTask.style.borderBottomColor === warmRed || curTask.style.textDecorationColor === warmRed) {
          curTask.style.borderBottomColor = coolPurple;
          curTask.style.textDecorationColor = coolPurple;
        } else if (curTask.style.borderBottomColor === warmOrange || curTask.style.textDecorationColor === warmOrange) {
          curTask.style.borderBottomColor = coolBlue;
          curTask.style.textDecorationColor = coolBlue;
        } else if (curTask.style.borderBottomColor === warmGolden || curTask.style.textDecorationColor === warmGolden) {
          curTask.style.borderBottomColor = coolLightBlue;
          curTask.style.textDecorationColor = coolLightBlue;
        } else if (curTask.style.borderBottomColor === warmYellow || curTask.style.textDecorationColor === warmYellow) {
          curTask.style.borderBottomColor = coolLightPurple;
          curTask.style.textDecorationColor = coolLightPurple;
        }
      }
    }
  }
}

export default changeExistingTaskColors;
