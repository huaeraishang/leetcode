/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let left = 0
    let right = 0
    let validCount = 0
    const pMap = new Map()
    const sMap = new Map()
    const ans = []
    p.split('').forEach(ch => {
        pMap.set(ch, (pMap.get(ch) || 0) + 1)
    })
    while (right < s.length) {
        const rCh = s[right]
        right ++
        if (pMap.has(rCh)) {
            sMap.set(rCh, (sMap.get(rCh) || 0) + 1)
            if (sMap.get(rCh) === pMap.get(rCh)) {
                validCount ++
            }
        }
        while (right - left >= p.length) {
            if (validCount === pMap.size) {
                ans.push(left)
            }
            const lCh = s[left]
            left ++
            if (pMap.has(lCh)) {
                if (sMap.get(lCh) === pMap.get(lCh)) {
                    validCount --
                }
                sMap.set(lCh, sMap.get(lCh) - 1)
            }
        }
    }
    return ans
};
// @lc code=end

