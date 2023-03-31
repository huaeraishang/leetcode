/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const ans = []
    const onPath = []
    const n = graph.length
    const traverse = (graph, index, n) => {
        onPath.push(index)
        if (index === n - 1) {
            ans.push([...onPath])
        }
        graph[index].forEach(item => {
            traverse(graph, item, n)
        })
        onPath.pop()
    }
    traverse(graph, 0, n)
    return ans
};
// @lc code=end

