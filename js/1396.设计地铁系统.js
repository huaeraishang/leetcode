/*
 * @lc app=leetcode.cn id=1396 lang=javascript
 *
 * [1396] 设计地铁系统
 */

// @lc code=start

var UndergroundSystem = function() {
    this.map = new Map()
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.map.set(id, {
        checkInStationName: stationName,
        checkInTime: t,
        checkOutStationName: null,
        checkOutTime: null,
    })
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const person = this.map.get(id)
    person.checkOutStationName = stationName
    person.checkOutTime = t
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let sum = 0
    let count = 0
    for (const value of this.map.values()) {
        if (value.checkInStationName === startStation 
            && value.checkOutStationName === endStation) {
            sum += value.checkOutTime - value.checkInTime
            count ++
        }
    }
    return sum / count
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
// @lc code=end

