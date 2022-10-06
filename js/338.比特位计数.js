/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
   const ans = []
   for (let i = 0; i <= n; i++) {
     let bitStr = i.toString(2)
     bitStr = bitStr.replace(/0/g, '')
     ans.push(bitStr.length)
   }
   return ans
};
// @lc code=end

