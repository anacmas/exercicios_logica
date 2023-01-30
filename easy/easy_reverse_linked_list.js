// Problema proposto por leetcode.com

// Link do problema: https://leetcode.com/problems/reverse-linked-list/

// Enunciado:
// Given the head of a singly linked list, reverse the list,
// and return the reversed list.

// Dificuldade: easy

var reverseList = function (head) {
  let regular = head;
  let inverse = null;
  let next;

  while (regular != null) {
    next = regular.next;
    regular.next = inverse;
    inverse = regular;
    regular = next;
  }

  return inverse;
};
