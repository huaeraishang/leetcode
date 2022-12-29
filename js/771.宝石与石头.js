/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let ans = 0
    for (let i = 0; i < jewels.length; i++) {
       const jewel = jewels[i]
       const reg = new RegExp(`${jewel}`, 'g')
       const arr = stones.match(reg)
       ans += arr ? arr.length : 0
    }
    return ans
};
// @lc code=end

