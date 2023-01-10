# Problema proposto por leetcode.com
# Link do problema: https://leetcode.com/problems/palindrome-number/

# Enunciado:
# Given an integer x, return true if x is a palindrome, and false otherwise.

x = -121

number_string = str(x)

inverted = []

i = 0

while i < len(number_string):
    inverted.insert(0, number_string[i])
    i += 1

inverted_joined = ''.join(inverted)

if inverted_joined == number_string:
    print(True)
else:
    print(False)
