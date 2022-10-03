/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const s2tMap = new Map()
    const t2sMap = new Map()
    const length = s.length
    for (let i = 0; i < length; i++) {
        let charS = s[i]
        let charT = t[i]
        if ((s2tMap.has(charS) && s2tMap.get(charS) !== charT) 
        || (t2sMap.has(charT) && t2sMap.get(charT) !== charS)) {
            return false
        }
        s2tMap.set(charS, charT)
        t2sMap.set(charT, charS)
    }
    return true
};
// @lc code=end

