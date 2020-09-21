//给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。 
//
// 示例 1: 
//
// 输入: n = 12
//输出: 3 
//解释: 12 = 4 + 4 + 4. 
//
// 示例 2: 
//
// 输入: n = 13
//输出: 2
//解释: 13 = 4 + 9. 
// Related Topics 广度优先搜索 数学 动态规划 
// 👍 593 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let result = [];

    // 如果开方 能被整开  直接返回
    if(Math.sqrt(n) % 1 == 0){
        result.push(n);
        return 1;
    }

    let sqrt = Math.floor(Math.sqrt(n));
    let left_num = n;


    while (left_num > 0){
        result.push(Math.pow(sqrt,2));
        left_num = left_num - Math.pow(sqrt,2);
        if(Math.sqrt(left_num) % 1 == 0){
            result.push(left_num);
            console.log(result);
            return result.length;
        }
        sqrt = Math.floor(Math.sqrt(left_num));
    }
    console.log(result);
};
numSquares(12);
//leetcode submit region end(Prohibit modification and deletion)
