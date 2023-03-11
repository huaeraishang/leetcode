/*
 * @lc app=leetcode.cn id=1603 lang=javascript
 *
 * [1603] 设计停车系统
 */

// @lc code=start
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big = big
    this.medium = medium
    this.small = small
    this.bigArr = []
    this.mediumArr = []
    this.smallArr = []
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if (carType === 1) {
        if (this.bigArr.length < this.big) {
            this.bigArr.push(carType)
            return true
        }
    } else if (carType === 2) {
        if (this.mediumArr.length < this.medium) {
            this.mediumArr.push(carType)
            return true
        }
    } else if (carType === 3) {
        if (this.smallArr.length < this.small) {
            this.smallArr.push(carType)
            return true
        }
    }
    return false
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end

