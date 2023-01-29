"""Problema proposto por leetcode.com

Link do problema: https://leetcode.com/problems/move-zeroes/

Enunciado:
Given an integer array nums, move all 0's to the end of it while 
maintaining the relative order of the non-zero elements. 
Note that you must do this in-place without making a copy of the array.

Dificuldade: easy"""

 
class Solution(object):
    def moveZeroes(self, nums):
        sum = 0

        for number in nums:
            if number == 0:
                sum += 1

        temp_array = list(filter(lambda x: x != 0, nums))

        count = 0
        while count < sum:
            temp_array.append(0)
            count += 1
        
        for n in range(len(nums)):
            nums[n] = temp_array[n]

        return nums