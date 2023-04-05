/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const virtualNode1 = new ListNode()
    const virtualNode2 = new ListNode()
    let p = head
    let p1 = virtualNode1
    let p2 = virtualNode2
    while (p) {
        if (p.val < x) {
            p1.next = p
            p1 = p1.next
        } else {
            p2.next = p
            p2 = p2.next
        }
        const temp = p.next
        p.next = null
        p = temp
    }
    p1.next = virtualNode2.next
    return virtualNode1.next
};
// @lc code=end

