import React from "react";
import './style.css';

// change the underline or strikethrough colors if the theme of the app is changed
// hex color match with colors in AddTasks
const changeExistingTaskColors = function(prevTheme, newTheme) {
  const taskList = document.getElementById('tasks').children;
  for (let i = 0; i < taskList.length; i++) {
    let curTask = taskList[i];
    // classic to new
    if (prevTheme === 'classic') {
      if (newTheme === 'extreme') {
        if (curTask.style.borderBottomColor === 'rgb(255, 0, 0)') {
          curTask.style.borderBottomColor = "#f83812";
        } else if (curTask.style.borderBottomColor === 'rgb(255, 230, 0)') {
          curTask.style.borderBottomColor = "#ee974b";
        } else if (curTask.style.borderBottomColor === 'rgb(15, 47, 255)') {
          curTask.style.borderBottomColor = "#51e5ff";
        }
      } else if (newTheme === 'cool') {
        if (curTask.style.borderBottomColor === 'rgb(255, 0, 0)') {
          curTask.style.borderBottomColor = "#5f4f93";
        } else if (curTask.style.borderBottomColor === 'rgb(255, 230, 0)') {
          curTask.style.borderBottomColor = "#cee4fd";
        } else if (curTask.style.borderBottomColor === 'rgb(15, 47, 255)') {
          curTask.style.borderBottomColor = "#4d669c";
        }
      } else if (newTheme === 'warm') {
        if (curTask.style.borderBottomColor === 'rgb(255, 0, 0)') {
          curTask.style.borderBottomColor = "#910000";
        } else if (curTask.style.borderBottomColor === 'rgb(255, 230, 0)') {
          curTask.style.borderBottomColor = "#ffe08a";
        } else if (curTask.style.borderBottomColor === 'rgb(15, 47, 255)') {
          curTask.style.borderBottomColor = "#d44e00";
        }
      }
    // extreme to new
    } else if (prevTheme === 'extreme') {
      if (newTheme === 'classic') {

      } else if (newTheme === 'cool') {

      } else if (newTheme === 'warm') {

      }
    // cool to new
    } else if (prevTheme === 'cool') {
      if (newTheme === 'classic') {

      } else if (newTheme === 'extreme') {

      } else if (newTheme === 'warm') {

      }
    // warm to new
    } else if (prevTheme === 'warm') {
      if (newTheme === 'classic') {

      } else if (newTheme === 'extreme') {

      } else if (newTheme === 'cool') {

      }
    }
  }
}

export default changeExistingTaskColors;
