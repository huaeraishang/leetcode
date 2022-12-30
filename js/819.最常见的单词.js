/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const map = new Map()
    let words = paragraph.split(' ').map(word => {
        if (/!|\?|'|,|;|\./.test(word)) {
            // 处理类似 ball. a,b,c,d hit far. 这种情况
            word = word.replace(/!|\?|'|,|;|\./g, ' ').trim().toLowerCase().split(' ')
        } else {
            word = word.toLowerCase()
        }
        return word
    })
    words = words.flat()
    words.forEach(word => {
        if (!banned.includes(word)) {
            map.set(word, (map.get(word) || 0) + 1)   
        }
    })
    let max = 0
    let ans = ''
    map.forEach((value, key) => {
        if (value > max) {
            max = value
            ans = key
        }
    })
    return ans
};
// @lc code=end

