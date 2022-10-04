/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
    this.array = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    const length = this.array.length
    this.array.push(x)
    for (let i = 0; i < length; i++) {
        this.array.push(this.array.shift())
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.array.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.array[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.array.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

