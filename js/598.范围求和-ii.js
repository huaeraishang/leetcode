/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let x = m
    let y = n
    ops.forEach(op => {
        x = Math.min(x, op[0])
        y = Math.min(y, op[1])
    })
    return x * y
};
// @lc code=end

