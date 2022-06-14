// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

function nextBigger(n) {
  let stringArr = n.toString().split("");
  let digitArr = stringArr.map((num) => (num = Number(num)));
  for (let i = digitArr.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      let temp = digitArr[i];
      digitArr[i] = digitArr[j];
      digitArr[j] = temp;
      console.log(digitArr.join(""));
      if (Number(digitArr.join("")) > n) {
        return Number(digitArr.join(""));
      } else {
        continue;
      }
    }
  }
}
console.log(nextBigger(144));
