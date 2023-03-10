// Problema proposto por leetcode.com

// Link do problema: https://leetcode.com/problems/palindrome-number/

// Enunciado:
// Given an integer x, return true if x is a palindrome, and false otherwise.

// Dificuldade: easy

let x = 121;

function isPalindrome(x) {
  let numberString = x.toString();

  let inverted = [];

  for (let i = 0; i < numberString.length; i++) {
    inverted.unshift(numberString[i]);
  }

  let invertedJoined = inverted.join("");

  if (invertedJoined === numberString) {
    return true;
  } else {
    return false;
  }
}

isPalindrome(x);
