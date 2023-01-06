/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let words = sentence.split(' ')
    words = words.map((word, index) => {
        let str = word
        if (/^[aeiou]/i.test(word)) {
            str += 'ma'
        } else {
            const strArr = str.split('')
            strArr.push(strArr.shift())
            str = strArr.join('') + 'ma'
        }
        for (let i = 0; i < index + 1; i++) {
            str += 'a'
        }
        return str
    })
    return words.join(' ')
};
// @lc code=end

