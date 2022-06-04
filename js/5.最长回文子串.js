/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0
    let end = 0
    for(let i = 0; i < s.length; i++) {
        // 中心是一个值
        let length1 = checkStr(s, i , i)
        // 中心是两个值
        let length2 = checkStr(s, i , i + 1)

        const length = Math.max(length1, length2)
        if(length > end - start) {
            start = i - Math.floor((length - 1) / 2)
            end = i + Math.floor(length / 2)
        }
    }
    return s.slice(start, end + 1)

};

const checkStr = (str, i, j) => {
    while(i >= 0 && j < str.length && str[i] === str[j]) {
        i--
        j++
    }
    return j - i - 1
}
// @lc code=end

