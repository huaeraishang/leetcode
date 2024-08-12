/*
 * @lc app=leetcode.cn id=1512 lang=javascript
 *
 * [1512] 好数对的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  const map = new Map()
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const indexs = map.get(nums[i])
      indexs.push(i)
      map.set(nums[i], indexs)
    } else {
      map.set(nums[i], [i])
    }
  }
  map.forEach((value, key) => {
    for(let i = 1; i < value.length; i++) {
      ans += i
    }
  })
  return ans
};
// @lc code=end

