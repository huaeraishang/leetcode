/*
 * @lc app=leetcode.cn id=979 lang=javascript
 *
 * [979] 在二叉树中分配硬币
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
  let moveCount = 0
  function dfs(node) {
    let moveLeft = 0
    let moveRight = 0
    if (!node) {
      return null
    }
    if (node.left) {
      moveLeft = dfs(node.left)
    }
    if (node.right) {
      moveRight = dfs(node.right)
    }
    moveCount += (Math.abs(moveLeft) + Math.abs(moveRight))
    return moveLeft + moveRight + node.val - 1
  }
  dfs(root)
  return moveCount
};
// @lc code=end

