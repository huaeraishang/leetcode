/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const ans = []
    for (let i = 0; i < rowIndex + 1; i++) {
        const row = new Array(i + 1).fill(1)
        for (let j = 1; j < i; j++) {
            row[j] = ans[i - 1][j - 1] + ans[i - 1][j]
        }
        ans.push(row)
    }
    return ans[rowIndex]
};
// @lc code=end

