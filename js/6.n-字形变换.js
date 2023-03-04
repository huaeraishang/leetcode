/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows >= s.length || numRows === 1) {
        return s
    }
    let ans = ''
    const len = s.length
    const r = numRows
    // 周期 r + r - 2
    const t = 2 * r - 2
    // 列数, 不满足一个周期，向上取整，补齐
    const c = Math.ceil(len / t) * (r - 1)
    // 构造二维矩阵
    const arr = new Array(r).fill(0).map(_ => new Array(c).fill(0))
    let x = 0
    let y = 0
    for (let i = 0; i < s.length; i++) {
        arr[x][y] = s[i]
        if (i % t < r - 1) {
            x++
        } else {
            x--
            y++
        }
    }
    for (const row of arr) {
        for (const col of row) {
            if (col != 0) {
                ans+= col
            }
        }
    }
    return ans
};
// @lc code=end

