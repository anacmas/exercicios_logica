// Problema proposto por leetcode.com

// Link do problema: https://leetcode.com/problems/reverse-linked-list/

// Enunciado:
// Given the head of a singly linked list, reverse the list,
// and return the reversed list.

// Dificuldade: easy

let head = [1, 2, 3, 4, 5];
let inverted = [];

for (let i = 0; i < head.length; i++) {
  inverted.unshift(head[i]);
}

console.log(inverted);
