/*
 * @lc app=leetcode.cn id=2095 lang=javascript
 *
 * [2095] 删除链表的中间节点
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
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
  let slow = head
  let fast = head
  let pre = null
  while (fast && fast.next) {
    pre = slow
    slow = slow.next
    fast = fast.next.next
  }
  if (pre) {
    pre.next = slow.next
  } else {
    head = null
  }
  return head
};
// @lc code=end

