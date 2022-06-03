// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

function score(dice) {
  let totalPoints = 0;
  dice = dice.sort();

  let ones = dice.filter((die) => die === 1);
  let sixes = dice.filter((die) => die === 6);
  let fives = dice.filter((die) => die === 5);
  let fours = dice.filter((die) => die === 4);
  let threes = dice.filter((die) => die === 3);
  let twos = dice.filter((die) => die === 2);
  if (ones.length >= 3) {
    totalPoints = 1000;
    dice = dice.splice(3, 5);
    filterForOneAndFive(dice);
  } else if (sixes.length >= 3) {
    totalPoints = 600;
    dice = dice.slice(0, 2);
    filterForOneAndFive(dice);
  } else if (fives.length >= 3) {
    totalPoints = 500;
    dice = takeOutThree(5, dice);
    filterForOneAndFive(dice);
  } else if (fours.length >= 3) {
    totalPoints = 400;
    dice = takeOutThree(4, dice);
    filterForOneAndFive(dice);
  } else if (threes.length >= 3) {
    totalPoints = 300;
    dice = takeOutThree(3, dice);
    filterForOneAndFive(dice);
  } else if (twos.length >= 3) {
    totalPoints = 200;
    dice = takeOutThree(2, dice);
    filterForOneAndFive(dice);
  } else {
    filterForOneAndFive(dice);
  }

  return totalPoints;

  function takeOutThree(num, dice) {
    let index = dice.findIndex((die) => die === num);
    return dice.splice(0, index).concat(dice.splice(index + 2));
  }

  function filterForOneAndFive(dice) {
    for (let i = 0; i < dice.length; i++) {
      if (dice[i] === 1) {
        totalPoints += 100;
      } else if (dice[i] === 5) {
        totalPoints += 50;
      }
    }
  }
}
