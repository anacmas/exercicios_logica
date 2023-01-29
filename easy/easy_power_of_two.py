"""Problema proposto por leetcode.com

Link do problema: https://leetcode.com/problems/power-of-two/

Enunciado:
Given an integer n, return true if it is a power of two. 
Otherwise, return false.

An integer n is a power of two, if there exists an integer x
such that n == 2^x.

Dificuldade: easy"""

class Solution(object):
    def isPowerOfTwo(self, n):
        for x in range(0, 50):
            if 2**x == n:
                return True
        return False