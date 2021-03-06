/**
 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

 示例:

 输入: 3
 输出: 5
 解释:
 给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

 1         3     3      2      1
 \       /     /      / \      \
 3     2     1      1   3      2
 /     /       \                 \
 2     1         2                 3

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/unique-binary-search-trees

 注：二叉排序树中，左子树都比节点小，右子树都比节点大
 */



/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
    let dp = Array.from({length: n + 1}, () => 0);

    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i < n + 1; i++) {
        for (let j = 1; j < i + 1; j++) {
            dp[i] += dp[j - 1] * dp[i - j]
        }
    }

    return dp[n];
};

console.log(numTrees(3))