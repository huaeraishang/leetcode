/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
  // 状态-- 字符串s 
  // 选择-- 字符串s中的字符
  // dp[i] = dp[j] && check(s[i - j])
  const n = s.length
  const dp = new Array(n + 1).fill(false)
  // 初始值设为true，计算dp[1]时需要
  dp[0] = true
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.slice(j, i))) {
        dp[i] = true
        // 从下标为0开始的，符合条件后，
        // 代表[0, j]和[j,i]这两段都符合条件了，就break跳出循环
        // 后面的下标1,2,3...都不需要再判断了
        break
      } 
    }
  }
  return dp[n]
};
// @lc code=end

