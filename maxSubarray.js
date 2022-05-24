// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function (arr) {
  if (arr.length === 0) {
    return 0;
  } else if (arr.every((num) => num < 0)) {
    return 0;
  } else {
    let sumArr = [];
    for (let i = 0; i < arr.length; i++) {
      let sum = arr[i];
      sumArr.push(sum);
      for (let j = i + 1; j < arr.length; j++) {
        sum = sum + arr[j];
        sumArr.push(sum);
      }
    }
    return Math.max(...sumArr);
  }
};
