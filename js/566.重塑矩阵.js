/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const flatMat = mat.flat()
    if (flatMat.length !== r * c) {
        return mat
    }
    const ans = []
    for (let i = 0; i < flatMat.length; i+=c) {
        ans.push(flatMat.slice(i, i + c))
    }
    return ans
};
// @lc code=end

