/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const ans = []
    for (let i = left; i <= right; i++) {
        let isContain = true
        const str = i.toString()
        if (!str.includes('0')) {
            const bits = i.toString().split('').map((item) => parseInt(item))
            for (let j = 0; j < bits.length; j++) {
                const bit = bits[j]
                if (i % bit !== 0) {
                    isContain = false
                    break
                }
            }
            if (isContain) {
                ans.push(i)
            }
        }
    }
    return ans
};
// @lc code=end

