/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const chars = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const set = new Set()
    words.forEach(word => {
        let targetChar = ''
        for (let i = 0; i < word.length; i++) {
            const cr = word[i]
            targetChar += chars[cr.charCodeAt() - 'a'.charCodeAt()]
        }
        set.add(targetChar)
    })
    return set.size
};
// @lc code=end

