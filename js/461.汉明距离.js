/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    // 先异或运算，二进制位不同时，异或运算结果为1
    const n = x ^ y
    // 转为二进制后，统计1的个数
    const str = n.toString(2).replace(/0/g, '')
    return str.length
};
// @lc code=end

