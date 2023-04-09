/*
 * @lc app=leetcode.cn id=2502 lang=javascript
 *
 * [2502] 设计内存分配器
 */

// @lc code=start
/**
 * @param {number} n
 */
var Allocator = function(n) {
    this.memorySpaces = new Array(n).fill(0)
};

/** 
 * @param {number} size 
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function(size, mID) {
    let left = 0
    for (let i = 0; i < this.memorySpaces.length; i++) {
        if (!this.memorySpaces[i]) {
            left = i
            let flag = true
            for (let j = left; j < left + size; j++) {
                if (this.memorySpaces[j] || j === this.memorySpaces.length) {
                    flag = false
                }
            }
            if (flag) {
                for (let j = left; j < left + size; j++) {
                    this.memorySpaces[j] = mID
                }
                return left
            }
        }
    }
    return -1
};

/** 
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.free = function(mID) {
    const memorySpacesBak = [...this.memorySpaces]
    let count = 0
    for (let i = 0; i < memorySpacesBak.length; i++) {
        if (memorySpacesBak[i] === mID) {
            this.memorySpaces[i] = 0
            count ++
        }
    }
    return count
};

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.free(mID)
 */
// @lc code=end

