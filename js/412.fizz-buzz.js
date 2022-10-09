/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let ans = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            ans[i] = 'FizzBuzz'
        } else if (i % 3 === 0) {
            ans[i] = 'Fizz'
        } else if (i % 5 === 0) {
            ans[i] = 'Buzz'
        } else {
            ans[i] = i.toString()
        }
    }
    ans.shift()
    return ans
};
// @lc code=end

