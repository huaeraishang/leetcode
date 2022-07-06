/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let chars = []
    let strArr = s.split('')
    let indexs = []
    strArr.forEach((item, index) => {
        if (/a|e|i|o|u/.test(item.toLocaleLowerCase())) {
            chars.push(item)
            indexs.push(index)
        }
    })
    chars = chars.reverse()
    indexs.forEach((item, index) => {
        strArr[item] = chars[index]
    })
    return strArr.join('')

};
// @lc code=end

