// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n) {
  let times = 0;

  function keepDividing(num, divisionNum) {
    if (num % divisionNum !== 0) {
      return [times, num];
    }
    if (num % divisionNum === 0) {
      times++;
      return keepDividing(num / divisionNum, divisionNum);
    }
  }

  function generatePrimeNumList(maxNum) {
    let primeNumList = [];
    for (let i = 2; i < maxNum; i++) {
      for (let j = 2; j <= i; j++) {
        if (i % j !== 0) {
          continue;
        } else if (i === j) {
          primeNumList.push(i);
        } else {
          break;
        }
      }
    }
    return primeNumList;
  }

  let primeNumList = generatePrimeNumList(n);
  let resultList = [];
  for (let i = primeNumList.length - 1; i >= 0; i--) {
    let power = keepDividing(n, primeNumList[i])[0];
    if (power === 1) {
      resultList.push(`${primeNumList[i]}`);
      n = keepDividing(n, primeNumList[i])[1];
    } else if (power !== 0) {
      resultList.push(`${primeNumList[i]}**${power}`);
      n = keepDividing(n, primeNumList[i])[1];
    }
  }

  return `(${resultList.reverse().join(")(")})`;
}
