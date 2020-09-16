//给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回
// 0。 
//
// 
//
// 示例： 
//
// 输入：s = 7, nums = [2,3,1,2,4,3]
//输出：2
//解释：子数组 [4,3] 是该条件下的长度最小的子数组。
// 
//
// 
//
// 进阶： 
//
// 
// 如果你已经完成了 O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。 
// 
// Related Topics 数组 双指针 二分查找 
// 👍 445 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(nums.length == 0){
        return 0;
    }
    let point_1 = 0;
    let point_2 = 0;
    let tmp = nums[0];
    let min;
    while (point_1 < nums.length && point_2 < nums.length){
        if(point_1 == point_2){
            tmp = nums[point_1]
        }else {
            tmp = tmp + nums[point_2];
        }

        if(tmp < s){
            point_2++;
            continue;
        } else if (tmp == s){

            let bj = point_1 == point_2 ? 1 : point_2 - point_1 + 1;
            if(min == undefined){
                min = bj;
            }else {
                if(min >= bj){
                    min = bj;
                }
            }


            point_1++;
            point_2 = point_1;
            tmp = nums[point_1];
            continue;
        }else {
            let bj = point_1 == point_2 ? 1 : point_2 - point_1 +  1;
            if(min == undefined){
                min = bj;
            }else {
                if(min >= bj){
                    min = bj;
                }
            }
            point_1++;
            tmp = nums[point_1];
            point_2 = point_1;
            continue;
        }
    }

    if(min == undefined){
        min = 0;
    }
    //console.log(min)
    return min;
};
//minSubArrayLen(11,[1,2,3,4,5])
//leetcode submit region end(Prohibit modification and deletion)
