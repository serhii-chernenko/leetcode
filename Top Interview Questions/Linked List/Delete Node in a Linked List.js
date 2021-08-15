// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    if (node === null || node.next === null) return null;

    node.val = node.next.val;
    node.next = node.next.next;
};
