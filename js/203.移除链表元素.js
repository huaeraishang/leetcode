/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let p = head
    let pre = null
    while(p) {
        if(p.val === val) {
            if(head === p) {
                head = p.next
            } else {
                pre.next = p.next
            }
        } else {
            pre = p
        }
        p = p.next
    }
    return head

};
// @lc code=end

