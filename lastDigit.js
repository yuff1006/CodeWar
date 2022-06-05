// Define a function that takes in two non-negative integers
// a
// a and
// b
// b and returns the last decimal digit of
// a
// b
// a
// b
//  . Note that
// a
// a and
// b
// b may be very large!

// For example, the last decimal digit of
// 9
// 7
// 9
// 7
//   is
// 9
// 9, since
// 9
// 7
// =
// 4782969
// 9
// 7
//  =4782969. The last decimal digit of
// (
// 2
// 200
// )
// 2
// 300
// (2
// 200
//  )
// 2
// 300

//  , which has over
// 1
// 0
// 92
// 10
// 92
//   decimal digits, is
// 6
// 6. Also, please take
// 0
// 0
// 0
// 0
//   to be
// 1
// 1.

// You may assume that the input will always be valid.

// Examples

// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9
// lastDigit("10","10000000000")  // returns 0

var lastDigit = function (str1, str2) {
  if (str1 === "0" && str2 === "0") {
    return 1;
  } else {
    let string1 = Number(str1).toString();
    let lastDigitStr1 = Number(string1.charAt(string1.length - 1));
    let string2 = Number(str2);
    let sequence = {
      1: [1, 1, 1, 1],
      2: [4, 8, 6, 2],
      3: [9, 7, 1, 3],
      4: [6, 4, 6, 4],
      5: [5, 5, 5, 5],
      6: [6, 6, 6, 6],
      7: [9, 3, 1, 7],
      8: [4, 2, 6, 8],
      9: [1, 9, 1, 9],
      0: [0, 0, 0, 0],
    };
    let moduloPosition = string2 % 4;
    console.log(moduloPosition);
    return sequence[lastDigitStr1][Math.abs(moduloPosition - 2)];
  }
};
