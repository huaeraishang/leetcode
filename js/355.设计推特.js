/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start

var Twitter = function() {
    this.map = new Map()
    this.order = 0
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.order ++
    const tweetInfo = { order: this.order, tweetId }
    if (this.map.has(userId)) {
        this.map.get(userId).tweets.push(tweetInfo)
    } else {
        this.map.set(userId, {
            tweets: [tweetInfo],
            followees: new Set()
        })
    }
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let list = []
    if (this.map.has(userId)) {
        const userInfo = this.map.get(userId)
        list.push(...userInfo.tweets)
        userInfo.followees.forEach(followeeId => {
            if (this.map.has(followeeId)) {
                list.push(...this.map.get(followeeId).tweets)
            }
        })
        list.sort((a, b) => b.order - a.order)
        list = list.map(item => {
            return item.tweetId
        })
    }
    return list.slice(0, 10)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (this.map.has(followerId)) {
        this.map.get(followerId).followees.add(followeeId)
    } else {
        this.map.set(followerId, {
            tweets: [],
            followees: new Set([followeeId])
        })
    }
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    const followees = this.map.get(followerId).followees
    followees.delete(followeeId)
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

