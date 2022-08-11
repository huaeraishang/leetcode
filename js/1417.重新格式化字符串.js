/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let nums = []
    let letters = []
    for (let cr of s) {
        if (/[a-zA-Z]/.test(cr)) {
            letters.push(cr)
        } else if (/[0-9]/.test(cr)) {
            nums.push(cr)
        }
    }

    let ans = []
    while (nums.length > 0 && letters.length > 0) {
        if (nums.length > letters.length) {
            ans.push(nums.shift())
            ans.push(letters.shift())

        } else {
            ans.push(letters.shift())
            ans.push(nums.shift())
        }
    }

    if (nums.length > 1 || letters.length > 1) {
        ans = []
    } else if (letters.length > 0) {
        ans.push(letters.shift())
    } else if (nums.length > 0) {
        ans.push(nums.shift())
    }

    return ans.join('')
}
// @lc code=end

