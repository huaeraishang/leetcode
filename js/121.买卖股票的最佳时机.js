/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0
    // 股票的最低价格，初始化为正无穷
    let min = Infinity
    // 一次遍历
    // 1.动态寻找股票的最低价格，当是最低价格时，不用计算最大收益，所以用else if
    // 2.基于当前最小值，计算最大收益，并用res保存
    // ---- min1 ---- min2 --- min3 ----
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else if (prices[i] - min > res) {
            res = prices[i] - min
        }
    }
    return res
};
// @lc code=end

