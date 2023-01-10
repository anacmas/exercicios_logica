# Problema proposto por leetcode.com
# Link do problema: https://leetcode.com/problems/contains-duplicate/

# Enunciado:
# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
# Dificuldade: easy


nums = [1, 2, 3, 1]
sum = 0

for i in range(len(nums)):
    for j in range(i+1, len(nums)):
        if nums[i] == nums[j]:
            sum += 1

if sum > 0:
    print(True)
else:
    print(False)