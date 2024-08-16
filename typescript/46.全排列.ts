/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  let track: number[] = []
  let ans: number[][] = []
  function backTrack(nums) {
    if (track.length === nums.length) {
      ans.push([...track])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!track.includes(nums[i])) {
        track.push(nums[i])
        backTrack(nums)
        track.pop()
      }
    }
  }
  backTrack(nums)
  return ans
};
// @lc code=end

