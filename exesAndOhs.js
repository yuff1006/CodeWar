// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  const newStr = str.toLowerCase().split('');
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === 'x') {
      newStr[i] = 1;
    } else if (newStr[i] === 'o') {
      newStr[i] = -1;
    } else {
      newStr[i] = 0;
    }
  }
  if (newStr.reduce((prev, curr) => prev + curr, 0) === 0) {
    return true;
  } else {
    return false;
  }
}
