"""Problema proposto por leetcode.com

Link do problema: https://leetcode.com/problems/count-of-smaller-numbers-after-self/

Enunciado:
Given an integer array nums, return an integer array counts where 
counts[i] is the number of smaller elements to the right of nums[i].

Dificuldade: hard"""

class Solution(object):
    def countSmaller(self, nums):
        counted_numbers = []

        for i in range(len(nums)):
            sum = 0

            for j in range(i+1, len(nums)):
                if nums[i] > nums[j]:
                    sum += 1

            counted_numbers.append(sum)

        return counted_numbers