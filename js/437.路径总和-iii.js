/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  const prefixMap = new Map()
  // map存储前缀和，key: 前缀和值， value: 对应前缀和值出现的次数
  // 空路径，前缀和值为0， 哪个节点也不经过，这种情况只有一种
  prefixMap.set(0, 1)
  return dfs(root, prefixMap, 0, targetSum)
};

var dfs = function(node, prefixMap, prefixSum, targetSum) {
  if (!node) {
    return 0
  }
  let ans = 0
  // 计算当前节点前缀和
  prefixSum += node.val
  // 获取路径上等于prefixSum - targetSum的前缀和个数 
  ans += prefixMap.get(prefixSum - targetSum) || 0
  // 保存当前节点前缀和
  prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1)
  ans += dfs(node.left, prefixMap, prefixSum, targetSum) 
  ans += dfs(node.right, prefixMap, prefixSum, targetSum) 
  // 回溯
  prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) - 1)
  return ans
};
// @lc code=end

