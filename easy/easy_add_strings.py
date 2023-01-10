"""Problema proposto por leetcode.com

Link do problema: https://leetcode.com/problems/add-strings/

Enunciado:
Given two non-negative integers, num1 and num2 represented as string, 
return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library 
for handling large integers (such as BigInteger). 
You must also not convert the inputs to integers directly.

Dificuldade: easy"""

num1 = "456"
num2 = "77"

def add_strings(n1, n2):
    n1_int = int(n1)
    n2_int = int(n2)

    sum = n1_int+n2_int

    return print(str(sum))

add_strings(num1, num2)