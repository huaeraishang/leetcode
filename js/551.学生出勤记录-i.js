/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    const matchs = s.match(/A/g)
    const isLater = /L{3,}/.test(s)
    return (!matchs || matchs.length < 2) && !isLater
};
// @lc code=end

