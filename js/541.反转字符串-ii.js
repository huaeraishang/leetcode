/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let ans = []
    for (let i = 0; i < s.length; i += k) {
        ans.push(s.slice(i, i + k))
    }
    ans = ans.map((item, index) => {
        return index % 2 === 0 ? item.split('').reverse().join('') : item
    })
    return ans.join('')
};
// @lc code=end

