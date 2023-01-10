# Problema proposto por leetcode.com
# Link do problema: https://leetcode.com/problems/reverse-linked-list/

# Enunciado:
# Given the head of a singly linked list, reverse the list, and return the reversed list.

head = [1,2]

inverted =[]


for i in head:
    inverted.insert(0, i)

print(inverted)