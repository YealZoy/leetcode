//给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 
//的 min(ai, bi) 总和最大。 
//
// 示例 1: 
//
// 
//输入: [1,4,3,2]
//
//输出: 4
//解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
// 
//
// 提示: 
//
// 
// n 是正整数,范围在 [1, 10000]. 
// 数组中的元素范围在 [-10000, 10000]. 
// 
// Related Topics 数组 
// 👍 188 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
 let sort = nums.sort((a,b) => a-b);
 let sum = 0;
 for(let i = 0; i < sort.length; i = i+2){
     sum = sum + sort[i];
 }
 //console.log(sum)
 return sum;
};
//arrayPairSum([6214, -2290, 2833, -7908]);
//leetcode submit region end(Prohibit modification and deletion)
