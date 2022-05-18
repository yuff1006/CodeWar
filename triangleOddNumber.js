// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// //...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
function rowSumOddNumbers(n) {
  let firstNumInRow = n * (n - 1) + 1;
  let numCountInRow = n;
  return sum(firstNumInRow, numCountInRow);
}

function sum(firstNumInRow, numCountInRow) {
  let sum = 0;
  for (
    let i = firstNumInRow;
    i <= firstNumInRow + (numCountInRow - 1) * 2;
    i += 2
  ) {
    sum += i;
  }
  return sum;
}
