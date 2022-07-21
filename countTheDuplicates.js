// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example

// "abcde" -> 0  # no characters repeats more than once
// "aabbcde" -> 2  # 'a' and 'b'
// "aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1  # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2  # 'a' and '1'
// "ABBA" -> 2  # 'A' and 'B' each occur twice

function duplicateCount(text) {
  let count = 0;
  const arr = text.toLowerCase().split('').sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
      for (let j = i + 2; j < arr.length; j++) {
        if (arr[j] === arr[i]) {
          continue;
        }
        i = j - 1;
        break;
      }
    }
  }
  return count;
}
