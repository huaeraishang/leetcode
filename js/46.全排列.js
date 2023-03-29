/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    const track = []
    backtrack(nums.length, nums, track, res)
    return res
};

const backtrack = (n, nums, track, res) => {
    if (track.length === n) {
        res.push(track)
        return
    }
    for (let i = 0; i < nums.length; i++) {
        track.push(nums[i])
        const numsBak = [...nums]
        const trackBak = [...track]
        numsBak.splice(i, 1)
        backtrack(n, numsBak, trackBak, res)
        track.pop()
    }
}
// @lc code=end

