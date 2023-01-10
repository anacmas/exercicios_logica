// Problema proposto por leetcode.com

// Link do problema: https://leetcode.com/problems/add-two-numbers/

// Enunciado:
// You are given two non-empty linked lists representing two
// non-negative integers. The digits are stored in reverse order,
// and each of their nodes contains a single digit. Add the two numbers
// and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero,
// except the number 0 itself.

// Dificuldade: medium

let reversedNumber1 = [2, 4, 3];
let reversedNumber2 = [5, 6, 4];

function addTwoNumbers(reversedNumber1, reversedNumber2) {
  let correctNumber1 = parseInt(reversedNumber1.reverse().join(""));
  let correctNumber2 = parseInt(reversedNumber2.reverse().join(""));

  let sum = (correctNumber1 + correctNumber2).toString();

  resultList = [];
  for (let i = 0; i < sum.length; i++) {
    resultList.push(parseInt(sum[i]));
  }

  console.log(resultList.reverse());
}

addTwoNumbers(reversedNumber1, reversedNumber2);
