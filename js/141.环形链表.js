/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const set = new Set()
    while (head) {
        if (!set.has(head)) {
            set.add(head)
        } else {
            return true
        }
        head = head.next
    }
    return false
};
// @lc code=end

