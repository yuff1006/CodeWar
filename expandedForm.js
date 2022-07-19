// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
  const resultArr = [];
  function divide(num) {
    if (num === 0) {
      return resultArr;
    }
    const numLen = num.toString().length - 1;
    const biggestUnit = Math.trunc(num / 10 ** numLen) * 10 ** numLen;
    resultArr.push(biggestUnit);
    return divide(num - biggestUnit);
  }
  const arr = divide(num);
  const strArr = arr.map((el) => el.toString());
  return strArr.join(' + ');
}
