"""Problema proposto por leetcode.com

Link do problema: https://leetcode.com/problems/single-number-iii/

Enunciado:
Given an integer array nums, in which exactly two elements appear
only once and all the other elements appear exactly twice.
Find the two elements that appear only once. You can return the answer
in any order.

You must write an algorithm that runs in linear runtime complexity
and uses only constant extra space.

Dificuldade: medium"""

class Solution(object):
    def singleNumber(self, nums):
        repeated_array = []
        array_without_repetition = []
        repeated = set()

        for number in nums:
            if number not in repeated_array:
                repeated_array.append(number)
            else: 
                repeated.add(number)

        for item in nums:
            if item not in repeated:
                array_without_repetition.append(item)



        return array_without_repetition