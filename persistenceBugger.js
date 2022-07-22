// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  let count = 0;
  function splitAndMultiply(num) {
    return num
      .toString()
      .split('')
      .reduce(
        (prevDigit, currDigit) => Number(prevDigit) * Number(currDigit),
        1
      );
  }
  while (num >= 10) {
    num = splitAndMultiply(num);
    count++;
    splitAndMultiply(num);
  }
  return count;
}
