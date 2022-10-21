/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function(root) {
    const map = new Map()
    let max = 0
    let ans = []
    function calcurate(val) {
        let count = map.get(val)
        if (count) {
            count ++
            map.set(val, count) 
        } else {
            map.set(val, 1) 
        }
    }
    function dfs(node) {
        if (!node) {
            return
        }
        dfs(node.left)
        calcurate(node.val)
        dfs(node.right)
    }
    dfs(root)
    map.forEach((count, key) => {
        if (count > max) {
            max = count
            ans = [key]
        } else if (count === max) {
            ans.push(key)
        }
    })
    return ans
};
// @lc code=end

