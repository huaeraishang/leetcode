/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const map = new Map()
    moves.split('').forEach(move => {
        const count = map.get(move) || 0
        map.set(move, count + 1)
    })
    if (map.get('U') === map.get('D') 
    && map.get('L') === map.get('R')) {
        return true
    }
    return false
};
// @lc code=end

