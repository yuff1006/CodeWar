// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules

// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }
  let timeArr = [1, 60, 60 * 60, 60 * 60 * 24, 365 * 24 * 60 * 60];
  let nameArr = ["second", "minute", "hour", "day", "year"];
  findMaxUnit(seconds, timeArr, nameArr);
  return convertString(timeObj);
}
let timeObj = [];
function findMaxUnit(seconds, timeArr, nameArr) {
  if (seconds === 0) {
    return timeObj;
  }
  let newTimeArr = [];
  let newNameArr = [];
  let newSeconds = 0;
  for (let i = 0; i < timeArr.length; i++) {
    if (seconds / timeArr[i] >= 1) {
      continue;
    } else {
      if (i === 0) {
        let pair = {};
        pair[nameArr[i]] = Math.trunc(seconds / timeArr[0]);

        timeObj.push(pair);
        newSeconds = seconds - Math.trunc(seconds / timeArr[0]) * timeArr[0];
      } else {
        let pair = {};
        pair[nameArr[i - 1]] = Math.trunc(seconds / timeArr[i - 1]);
        timeObj.push(pair);
        newSeconds =
          seconds - Math.trunc(seconds / timeArr[i - 1]) * timeArr[i - 1];
        newTimeArr = timeArr.slice(0, i);
        newNameArr = nameArr.slice(0, i);
      }

      break;
    }
  }
  return findMaxUnit(newSeconds, newTimeArr, newNameArr);
}

function convertString(timeObj) {
  let resultArr = [];
  timeObj.forEach((pair) => {
    let key = Object.keys(pair)[0];
    if (pair[key] > 1) {
      resultArr.push(`${pair[key]} ${key}s`);
    } else {
      resultArr.push(`${pair[key]} ${key}`);
    }
  });

  if (resultArr.length === 1) {
    return resultArr[0];
  } else if (resultArr.length === 2) {
    return resultArr.join(" and ");
  }
  let lastItem = resultArr.pop();
  resultArr.push("and");
  resultArr.push(lastItem);
  return resultArr.join(", ").replace("and,", "and");
}
