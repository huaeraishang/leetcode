/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let str1 = 'qwertyuiop'
    let str2 = 'asdfghjkl'
    let str3 = 'zxcvbnm'
    let ans = []
    words.forEach(word => {
        let line1 = false
        let line2 = false
        let line3 = false
        let isInclude = true
        for (let i = 0; i < word.length; i++) {
            const char = word[i]
            if (str1.includes(char)) {
                line1 = true
            } else if (str2.includes(char)) {
                line2 = true
            } else if (str3.includes(char)) {
                line3 = true
            }
            if ((line1 && line2) || (line1 && line3) 
            || (line2 && line3)) {
                isInclude = false
                break
            }
        }
        if (isInclude) {
            ans.push(word)   
        }
    })
    return ans
};
// @lc code=end

