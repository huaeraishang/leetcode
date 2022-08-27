/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let results = []
    // 代表进位
    let highBit = 0
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        // 等于1时，取1；不等于1时，都取0，包括短字符串超出下标，取值是undefine的情况
        const numA = parseInt(a[i]) === 1 ? 1 : 0
        const numB = parseInt(b[j]) === 1 ? 1 : 0
        const sum = numA + numB + highBit
        let currentBit = sum % 2
        highBit = Math.floor(sum / 2)
        // 插入当前位
        results.unshift(currentBit)
    }
    if (highBit > 0) {
        results.unshift(highBit)
    }
    return results.join('')    
};
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    // 使用BigInt, 先转化位10进制，求和，然后再转为二进制输出
    const sum = BigInt('0b' + a) + BigInt('0b' + b)
    return sum.toString(2)
};
// @lc code=end

