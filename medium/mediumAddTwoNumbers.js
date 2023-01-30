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

var addTwoNumbers = function (l1, l2) {
  var head = new ListNode(0);
  var count = 0;
  var sum = 0;
  var node = head;

  while ((l1 || l2) !== null) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + count;
    count = Math.floor(sum / 10);
    node.next = new ListNode(sum % 10);
    node = node.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (count) node.next = new ListNode(count);
  return head.next;
};
