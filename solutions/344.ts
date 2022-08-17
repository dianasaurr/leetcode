// https://leetcode.com/problems/reverse-string/

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    for (let i = 0; i < (s.length/2); i++) {
        // length - 1 is last index
        const oppositeIndex = (s.length - 1) - i; 
        const temp = s[i];
        s[i] = s[oppositeIndex];
        s[oppositeIndex] = temp;
    }
};