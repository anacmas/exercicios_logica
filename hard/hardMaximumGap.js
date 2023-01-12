// Problema proposto por leetcode.com

// Link do problema: https://leetcode.com/problems/maximum-gap/

// Enunciado:
// Given an integer array nums, return the maximum difference between two
// successive elements in its sorted form. If the array contains less than
// two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear
// extra space.

// Dificuldade: hard

let nums = [3, 6, 9, 1];
nums.sort;

function calculateMaximumGap(numbersArray) {
  if (numbersArray.length > 1) {
    i = 0;
    let maximumDifference = numbersArray[i + 1] - numbersArray[i];
    while (i < numbersArray.length - 1) {
      if (numbersArray[i + 1] - numbersArray[i] > maximumDifference) {
        maximumDifference = numbersArray[i + 1] - numbersArray[i];
      }
      i++;
    }

    return console.log(maximumDifference);
  } else {
    maximumDifference = [0];
    return console.log(maximumDifference);
  }
}

calculateMaximumGap(nums);
