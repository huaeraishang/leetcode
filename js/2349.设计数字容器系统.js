/*
 * @lc app=leetcode.cn id=2349 lang=javascript
 *
 * [2349] 设计数字容器系统
 */

// @lc code=start

var NumberContainers = function() {
    // index -> number的映射
    this.indexToNumberMap = new Map()
    // number -> set的映射， set保存的number对应的所有的index
    this.numberToIndexsSetMap = new Map()
    // number -> 最终返回的index的映射， 起缓存作用
    this.cacheMap = new Map()
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    const numberKey = this.indexToNumberMap.get(index)
    if (numberKey && this.numberToIndexsSetMap.has(numberKey)) {
       this.numberToIndexsSetMap.get(numberKey).delete(index)
       this.cacheMap.delete(numberKey)
    }
    this.numberToIndexsSetMap.set(number, (this.numberToIndexsSetMap.get(number) || new Set()).add(index))
    this.indexToNumberMap.set(index, number)
    this.cacheMap.delete(number)
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    if (this.cacheMap.has(number)) {
        return this.cacheMap.get(number)
    }
    const set = this.numberToIndexsSetMap.get(number)
    let ans = -1
    if (set && set.size > 0) {
        ans = Math.min(...set)
    }
    this.cacheMap.set(number, ans)
    return ans
};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
// @lc code=end

