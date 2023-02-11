/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    image = image.map(row => {
        let newRow = row.reverse()
        newRow = newRow.map(col => {
           return col === 0 ? 1 : 0
        })
        return newRow
    })
    return image
};
// @lc code=end

