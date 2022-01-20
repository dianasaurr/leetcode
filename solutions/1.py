# https://leetcode.com/problems/two-sum/

from typing import List

class Solution:
    # O(n) runtime, O(n) space
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # store previously seen nums and their index
        seen = {}
        for i, x in enumerate(nums):
            # check if the difference needed to add up to the target has been seen yet
            diff = target - x
            if diff in seen:
                return [i, seen[diff]]
            
            seen[x] = i
        return [-1, -1]
        
    # O(n^2) runtime, O(1) space
    def bruteForceSolution(self, nums: List[int], target: int) -> List[int]:
        # iterate through all possible pairs to find solution
        for i in range(len(nums)):
            for j in range(i, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return [-1, -1]