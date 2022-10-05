/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const p2sMap = new Map()
    const s2pMap = new Map()
    const length = pattern.length
    const sArr = s.split(' ')
    if (length !== sArr.length) {
        return false
    }
    for (let i = 0; i < length; i++) {
        const pItem = pattern[i]
        const sItem = sArr[i]
        const isNotMatchP = p2sMap.has(pItem) && p2sMap.get(pItem) !== sItem
        const isNotMatchS = s2pMap.has(sItem) && s2pMap.get(sItem) !== pItem
        if (isNotMatchP || isNotMatchS) {
            return false
        } else {
            p2sMap.set(pItem, sItem)
            s2pMap.set(sItem, pItem)
        }
    }
    return true
};
// @lc code=end

