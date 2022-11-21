/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const map = new Map()
    nums.forEach((num, index) => {
        if (map.has(num)) {
            const storeArr = map.get(num)
            storeArr[0] ++
            storeArr[2] = index
        } else {
            map.set(num, [1, index, index])
        }
    })
    let max = Number.MIN_SAFE_INTEGER
    let minMargin = Number.MAX_SAFE_INTEGER
    map.forEach(arr => {
        if (arr[0] > max) {
            max = arr[0]
            minMargin = arr[2] - arr[1] + 1
        } else if (arr[0] === max) {
            const margin = arr[2] - arr[1] + 1
            if (margin < minMargin) {
                minMargin = margin
            }
        }
    })
    return minMargin
};
// @lc code=end

