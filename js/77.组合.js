/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const ans = []
    const dfs = (n, k, start, arr) => {
        if (arr.length === k) {
            ans.push([...arr])
            return
        }
        for (let i = start; k - arr.length <= n - i + 1; i++) {
            arr.push(i)
            dfs(n, k, i + 1, arr)
            arr.pop()
        }
    }
    dfs(n, k, 1, [])
    return ans
};
// @lc code=end

