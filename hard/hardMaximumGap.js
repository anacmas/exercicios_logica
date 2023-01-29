// Problema proposto por leetcode.com

// Link do problema: https://leetcode.com/problems/maximum-gap/

// Enunciado:
// Given an integer array nums, return the maximum difference between two
// successive elements in its sorted form. If the array contains less than
// two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear
// extra space.

// Dificuldade: hard

var maximumGap = function (nums) {
  nums.sort;
  if (nums.length > 1) {
    i = 0;
    let maximumDifference = nums[i + 1] - nums[i];
    while (i < nums.length - 1) {
      if (nums[i + 1] - nums[i] > maximumDifference) {
        maximumDifference = nums[i + 1] - nums[i];
      }
      i++;
    }

    return maximumDifference;
  } else {
    maximumDifference = [0];
    return maximumDifference;
  }
};
