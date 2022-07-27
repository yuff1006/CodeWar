// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

function solution(number) {
  if (number <= 0) {
    return 0;
  }
  let sumArr = [];
  function findAllMultiples(threeOrFive, number) {
    let i = 1;
    while (threeOrFive * i < number) {
      sumArr.push(threeOrFive * i);
      i++;
    }
  }
  findAllMultiples(3, number);
  findAllMultiples(5, number);
  const noRepeatsArr = sumArr.filter(
    (el, index, self) => self.indexOf(el) === index
  );
  return noRepeatsArr.reduce((prev, curr) => prev + curr, 0);
}
