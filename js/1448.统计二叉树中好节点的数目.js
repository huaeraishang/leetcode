/*
 * @lc app=leetcode.cn id=1448 lang=javascript
 *
 * [1448] 统计二叉树中好节点的数目
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
var goodNodes = function(root) {
  return dfs(root, -Infinity)
};

var dfs = function(node, pathMax) {
  if (!node) {
    return 0
  }
  let res = 0
  if (node.val >= pathMax) {
    res++
    pathMax = node.val
  }
  res += dfs(node.left, pathMax) + dfs(node.right, pathMax)
  return res
};
// @lc code=end

