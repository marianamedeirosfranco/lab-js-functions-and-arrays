// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else return num1;
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(wordsArr) {
  if (wordsArr.length === 0) return 0;

  let longestWord = wordsArr[0];

  for (let i = 1; i < wordsArr.length; i++) {
    const word = wordsArr[i];

    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArr) {
  if (!numbersArr) return null;
  let sum = 0;

  for (let i = 0; i < numbersArr.length; i++) {
    sum += numbersArr[i];
  }

  return sum;
}
// Iteration 4 | Numbers Average
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
  if (numbersArray.length === 0) {
    return 0;
  } else {
    return sumNumbers(numbersArray) / numbersArray.length;
  }
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordsArr, word) {
  if (wordsArr.length === 0) {
    return null;
  }

  let doesExist = false;

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
      doesExist = true;
    }
  }

  return doesExist;
}
