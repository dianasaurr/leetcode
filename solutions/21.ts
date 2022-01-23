// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 */ 
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // base cases, if one is empty, return the other
    if (!list1) { return list2; }
    if (!list2) { return list1; }
    
    // create a reference to the list to be returned
    let result = new ListNode();
    let pointer = result;

    // compare list values and take the lesser of the two
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            pointer.next = list1;
            list1 = list1.next;
        } else {
            pointer.next = list2;
            list2 = list2.next;
        }
        pointer = pointer.next;
    }
    
    // check if there's any remaining values, and append
    if (list1) {
        pointer.next = list1;
    } else if (list2) {
        pointer.next = list2;
    }
    
    return result.next;
};