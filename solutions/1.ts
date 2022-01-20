// https://leetcode.com/problems/two-sum/

// O(n) runtime, O(n) space
function twoSum(nums: number[], target: number): number[] {
    // keep track of values and their indexes we've seen
    const seen = [];

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        // check if we've seen the difference between the num and target
        if (seen[diff] != undefined) {
            return [i, seen[diff]];
        }
        
        seen[nums[i]] = i;
    }
    
    return [0,0]
};

// Iterate through all possible combinations - O(n^2)
function bruteForceSolution(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}; 