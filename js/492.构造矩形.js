/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let diff = Infinity
    let ans = []
    for (let w = 1; w * w <= area; w++) {
        if (area / w > 0 && area % w === 0) {
            let l = area / w
            let m = l - w
            if (l >= w && m < diff) {
                diff = m
                ans = [l, w]
            }
        }
    }
    return ans
};
// @lc code=end

