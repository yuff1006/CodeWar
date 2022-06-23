//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  const allNumberRegex = /[^0-9\.]/g;
  const allAlphaRegex = /[^a-zA-Z]+/g;
  if (words.length === 0) {
    return '';
  }
  let pairList = [];
  const wordNumberList = words.split(' ');
  for (let i = 0; i < wordNumberList.length; i++) {
    let pair = {};
    pair[wordNumberList[i].replace(allNumberRegex, '')] = wordNumberList[i];
    pairList.push(pair);
  }
  let newList = [];
  for (let j = 1; j < wordNumberList.length + 1; j++) {
    for (let i = 0; i < wordNumberList.length; i++) {
      if (Number(Object.keys(pairList[i])[0]) === j) {
        console.log(pairList[i][j]);
        newList.push(pairList[i][j]);
      }
    }
  }
  return newList.join(' ');
}
