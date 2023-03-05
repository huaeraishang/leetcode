/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const ans = []
    if (digits.length === 0) {
        return ans
    }
    const map = new Map()
    .set('2', 'abc')
    .set('3', 'def')
    .set('4', 'ghi')
    .set('5', 'jkl')
    .set('6', 'mno')
    .set('7', 'pqrs')
    .set('8', 'tuv')
    .set('9', 'wxyz')
    function dfs(ans, index, curValues) {
        if (index === digits.length) {
            ans.push(curValues.join(''))
        } else {
            const letters = map.get(digits[index]).split('')
            for (const letter of letters) {
                curValues.push(letter) 
                dfs(ans, index + 1, curValues)
                curValues.pop()
            }
        }
    }
    // dfs(ans, 0, [])

    // 第二种回溯方法
    function dfs2(ans, index, curValue) {
        if (index === digits.length) {
            ans.push(curValue)
            return
        }
        const letters = map.get(digits[index]).split('')
        for (const letter of letters) {
            dfs2(ans, index + 1, curValue + letter)
        }
    }
    dfs2(ans, 0, '')
    return ans
};
// @lc code=end

