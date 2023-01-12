// Problema proposto por leetcode.com

// Link do problema: https://leetcode.com/problems/add-strings/

// Enunciado:
// Given two non-negative integers, num1 and num2 represented as string,
// return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library
// for handling large integers (such as BigInteger).
// You must also not convert the inputs to integers directly.

// Dificuldade: easy

let num1 = "456";
let num2 = "77";

function addStrings(n1, n2) {
  let n1_int = parseInt(n1);
  let n2_int = parseInt(n2);
  let sum = n1_int + n2_int;

  return console.log(sum.toString());
}

addStrings(num1, num2);
