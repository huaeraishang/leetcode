/*
 * @lc app=leetcode.cn id=637 lang=typescript
 *
 * [637] 二叉树的层平均值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }
  const queue: TreeNode[] = []
  const ans: number[] = []
  queue.push(root)
  while (queue.length !== 0) {
    const length = queue.length
    let sum = 0
    for (let i = 0; i < length; i++) {
      const node: TreeNode = queue.shift() as TreeNode
      sum += node.val
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    ans.push(sum / length)
  }
  return ans
};
// @lc code=end

