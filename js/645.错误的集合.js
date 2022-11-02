/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const n = nums.length
    let arr = new Array(n).fill(0).map((item, index) => index + 1)
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        if (!nums.includes(arr[i])) {
            ans.push(arr[i])
            break
        }
    }
    for (let i = 0; i < nums.length; i++) {
        const index = arr.indexOf(nums[i])
        if (index !== -1) {
            arr.splice(index, 1)   
        } else {
            ans.unshift(nums[i])
        }
    }
    return ans
};
var findErrorNums2 = function(nums) {
    const n = nums.length
    let ans = []
    const map = new Map()
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1)
    })
    for (let i = 1; i <= n; i++) {
        const count = map.get(i) || 0
        if (count === 2) {
            ans.unshift(i)
        } else if (count === 0) {
            ans.push(i)
        }
    }
    return ans
};
// @lc code=end

