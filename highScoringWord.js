// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const wordArr = x.split(' ');
  let biggestSum = 0;
  let biggestWord = null;
  for (let i = 0; i < wordArr.length; i++) {
    let sum = 0;
    for (let j = 0; j < wordArr[i].length; j++) {
      sum += wordArr[i].charCodeAt(j) - 96;
    }
    if (biggestSum < sum) {
      biggestSum = sum;
      biggestWord = wordArr[i];
    }
  }
  return biggestWord;
}
