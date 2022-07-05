// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
  word = word.toLowerCase();
  const arr = word.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      let temp = arr[i];
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === temp) {
          arr[j] = 'right';
        }
      }
    } else {
      arr[i] = 'left';
    }
  }
  return arr.map((el) => (el === 'right' ? ')' : '(')).join('');
}
