/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let index = 0
  const stack = []
  while (index < s.length) {
    let cur = s[index]
    if (/[0-9]/.test(cur)) {
      stack.push(getNumBits(s, index))
    } else if (/[a-z]/.test(cur) || cur === '[') {
      stack.push(cur)
      index ++
    } else {
      if (cur === ']') {
        let repeatChar = stack.pop()
        const repeatArr = []
        while (repeatChar !== '[') {
          repeatArr.push(repeatChar)
          repeatChar = stack.pop()
        }
        // 数字出栈
        const num = stack.pop()
        const repeatStr = repeatArr.reverse().join('')
        for (let i = 0; i < num; i++) {
          stack.push(repeatStr)
        }
      }
      index ++
    }
  }

  // 获取多位数字
  function getNumBits(s) {
    let numStr = ''
    while (/[0-9]/.test(s[index])) {
      numStr += s[index]
      index ++
    }
    return Number(numStr)
  }
  return stack.join('')
};
// @lc code=end

