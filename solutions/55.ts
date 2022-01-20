// https://leetcode.com/problems/jump-game/

/* 
 * Runtime - O(n)
 * Space - O(1)
 */
function canJump(nums: number[]): boolean {
    // if length is 1, we already reached the end
    if (nums.length === 1) {
        return true;
    }
    
    const lastIndex = nums.length - 1;
    let reachable = 0;
    
    // iterate through nums and update the furthest reachable index as we go
    // stop iterating when we get to the end, go past our max reach, or are able to reach the last index
    for (let i = 0; i < lastIndex && i <= reachable && reachable < lastIndex; i++) {
        reachable = Math.max(i + nums[i], reachable);
    }
    
    return reachable >= lastIndex;
};