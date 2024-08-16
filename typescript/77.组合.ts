/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const track: number[] = []
  const ans: number[][] = []
  function backTrack(n, k, cur) {
    if (track.length === k) {
      ans.push([...track])
      return
    }
    for (let i = cur; i <= n; i++) {
      if (!track.includes(i)) {
        track.push(i)
        backTrack(n, k, i + 1)
        track.pop()
      }
    }
  }
  backTrack(n, k, 1)
  return ans
};
// @lc code=end

