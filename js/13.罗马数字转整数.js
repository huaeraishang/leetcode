/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map()
    map.set('I', 1)
    map.set('V', 5)
    map.set('X', 10)
    map.set('L', 50)
    map.set('C', 100)
    map.set('D', 500)
    map.set('M', 1000)
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        const value = map.get(s[i])
        if (i < s.length - 1 && value < map.get(s[i + 1])) {
            ans -= value
        } else {
            ans += value
        }
        
    }
    return ans
};
// @lc code=end

