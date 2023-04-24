/*
 * @lc app=leetcode.cn id=2615 lang=javascript
 *
 * [2615] 等值距离和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
    const arr = []
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            const sumArr = map.get(nums[i])
            sumArr.push(sumArr[sumArr.length - 1] + i)
        } else {
            // 前缀合数组，初始元素设置为0，比原数组长度多1
            map.set(nums[i], [0, i])
        }
    }
    // 存储当前用到的是相同数字中的第几个，即下标数组indexs中元素的下标位置
    const sameNumOrderMap = new Map()
    for (let j = 0; j < nums.length; j++) {
        const item = nums[j]
        let absSum = 0
        // 设置的相对于原下标数组的下标位置
        sameNumOrderMap.set(item, sameNumOrderMap.has(item) ? sameNumOrderMap.get(item) + 1 : 0)
        // 前缀合数组下标比原数组下标大1
        const curIndex = sameNumOrderMap.get(item) + 1
        let indexs = map.get(item)
        // indexs长度大于2，代表有相同的数
        if (indexs.length > 2) {
            // 使用curIndex - 1, 不能包含curIndex这个位置的数；curIndex下标是针对前缀和数组，和j相乘的是指原下标数组的元素个数，不能搞混
            const left = Math.abs(indexs[curIndex - 1] - j * (curIndex - 1))
            // indexs[curIndex] 包含了原下标数组curIndex - 1及其之前的位置的元素的和
            const right = Math.abs(indexs[indexs.length - 1] - indexs[curIndex] - (indexs.length - 1 - curIndex) * j)
            absSum += left
            absSum += right
        }
        arr.push(absSum)
    }
    return arr
}
// @lc code=end

