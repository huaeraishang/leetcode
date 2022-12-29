/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    function isPrime(num) {
        if (num < 2) {
            return false
        }
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
    let ans = 0
    for (let i = left; i <= right; i++) {
        const count = i.toString(2).split('0').join('').length
        if (isPrime(count)) {
            ans ++
        } 
    }
    return ans
};
// @lc code=end

