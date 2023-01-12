"""Problema proposto por leetcode.com

// Link do problema: https://leetcode.com/problems/n-queens-ii/

// Enunciado:
// Given an integer array nums, return an integer array counts where 
// counts[i] is the number of smaller elements to the right of nums[i].

// Dificuldade: hard"""

nums = [5,2,6,1]

def count_smaller_numbers(numbers):
    counted_numbers = []

    for i in range(len(numbers)):
        sum = 0

        for j in range(i+1, len(numbers)):
            if numbers[i] > numbers[j]:
                sum += 1

        counted_numbers.append(sum)

    return print(counted_numbers)


count_smaller_numbers(nums)