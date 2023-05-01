/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    // 二维前缀和
    const x = matrix.length
    const y = matrix[0].length
    this.preSumMatrix = new Array(x + 1).fill(0).map(() => new Array(y + 1).fill(0))
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= y; j++) {
            this.preSumMatrix[i][j] = this.preSumMatrix[i - 1][j] + this.preSumMatrix[i][j - 1]
                - this.preSumMatrix[i - 1][j - 1] + matrix[i - 1][j - 1]
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return this.preSumMatrix[row2 + 1][col2 + 1] - this.preSumMatrix[row1][col2 + 1]
        - this.preSumMatrix[row2 + 1][col1] + this.preSumMatrix[row1][col1]
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

