/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let left = 0
    let right = 0
    const s1Map = new Map()
    const s2Map = new Map()
    // 符合要求的字母个数
    let validCount = 0
    s1.split('').forEach((item) => {
        s1Map.set(item, (s1Map.get(item) || 0) + 1)
    })
    while (right < s2.length) {
        const s2Ch = s2[right]
        right++
        if (s1Map.has(s2Ch)) {
            s2Map.set(s2Ch, (s2Map.get(s2Ch) || 0) + 1)
            if (s2Map.get(s2Ch) === s1Map.get(s2Ch)) {
                validCount++
            }
        }
        while (right - left >= s1.length) {
            if (validCount === s1Map.size) {
                return true
            }
            const s2ChL = s2[left]
            left++
            if (s1Map.has(s2ChL)) {
                if (s2Map.get(s2ChL) === s1Map.get(s2ChL)) {
                    validCount--
                }
                s2Map.set(s2ChL, s2Map.get(s2ChL) - 1)
            }
        }
    }
    return false
};
// @lc code=end

