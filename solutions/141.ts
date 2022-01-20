// https://leetcode.com/problems/linked-list-cycle/

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/* Solution - Floyd's Tortoise and Hare algorithm
 * Runtime - O(n)
 * Space - O(1)
 */
function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next) {
        // a single node can't have a cycle
        return false;
    }
    
    let fast = head; // walks the linkedlist 2 at a time
    let slow = head; // walks the linkedlist 1 at a time
    
    // if the fast and slow pointers meet, there is a cycle
    while (fast.next && fast.next.next) {     
        fast = fast.next.next;
        slow = slow.next;
        
        if (fast == slow) {
            return true;
        }
    }
    
    // otherwise fast hit the end of the list, there is no cycle
    return false;
};