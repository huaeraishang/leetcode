/*
 * @lc app=leetcode.cn id=1656 lang=javascript
 *
 * [1656] 设计有序流
 */

// @lc code=start
/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.streams = new Array(n)
    this.ptr = 1
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.streams[idKey - 1] = value
    const ans = []
    while (this.streams[this.ptr - 1]) {
        ans.push(this.streams[this.ptr - 1])
        this.ptr ++
    }
    return ans
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
// @lc code=end

