/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    let track = ''
    backtrack(n, n, track, res)
    return res
};

const backtrack = (left, right, track, res) => {
    if (left > right) {
        return
    }
    if (left < 0 || right < 0) {
        return
    }
    if (left === 0 && right === 0) {
        res.push(track)
        return
    }

    track += '('
    backtrack(left - 1, right, track, res)
    track = track.slice(0, - 1)

    track += ')'
    backtrack(left, right - 1, track, res)
    track = track.slice(0, - 1)
}
// @lc code=end

