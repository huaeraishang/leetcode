/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function getNextNum(num) {
        let totalNum = 0
        while (num > 0) {
            let b = num % 10
            totalNum += b * b
            num = Math.floor(num / 10)
        }
        return totalNum
    }
    const set = new Set()
    while (n > 0 && !set.has(n)) {
        set.add(n)
        n = getNextNum(n)
    }
    return n === 1
};
// @lc code=end

