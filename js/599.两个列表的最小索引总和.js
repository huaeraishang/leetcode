/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let min = Number.MAX_SAFE_INTEGER
    let ans = []
    list1.forEach((item, index) => {
        const index2 = list2.indexOf(item)
        if (index2 !== -1) {
            const sumIndex = index + index2
            if (sumIndex <= min) {
                if (sumIndex !== min) {
                    ans = []
                }
                ans.push(item)
                min = sumIndex
            }
        }
    })
    return ans
};
// @lc code=end

