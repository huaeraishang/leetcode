/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // 参考题解：https://mp.weixin.qq.com/s/k-z_oewAqMYc3vpmOm4gEQ
    // 坐标原点
    let sum = 0
    // 最低点
    let minSum = 0
    let start = 0
    let len = gas.length
    for (let i = 0; i < len; i++) {
        // 经过i点后，剩余的油
        sum += gas[i] - cost[i]
        if (sum < minSum) {
            minSum = sum
            start = i + 1
        }
    }
    if (sum < 0) {
        return -1
    }
    return start === len ? 0 : start
};
// @lc code=end

