/*
 * @lc app=leetcode.cn id=528 lang=javascript
 *
 * [528] 按权重随机选择
 */

// @lc code=start
/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.preFixSum = []
    this.preFixSum[0] = 0
    for (let i = 1; i <= w.length; i++) {
        this.preFixSum[i] = this.preFixSum[i - 1] + w[i - 1]
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    const len = this.preFixSum.length
    const target = Math.floor(Math.random() * this.preFixSum[len - 1]) + 1
    const index = this.searchLeft(this.preFixSum, target) - 1
    return index
};

Solution.prototype.searchLeft = function (arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        if (arr[mid] < target) {
            left = mid + 1
        } else if (arr[mid] > target) {
            right = mid - 1
        } else if (arr[mid] === target) {
            right = mid - 1
        }
    }
    return left
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end

