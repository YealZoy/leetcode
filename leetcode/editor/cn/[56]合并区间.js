//给出一个区间的集合，请合并所有重叠的区间。 
//
// 
//
// 示例 1: 
//
// 输入: intervals = [[1,3],[2,6],[4,7],[8,10],[15,18]]
//输出: [[1,6],[8,10],[15,18]]
//解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 
//
// 示例 2: 
//
// 输入: intervals = [[1,4],[4,5]]
//输出: [[1,5]]
//解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。 
//
// 注意：输入类型已于2019年4月15日更改。 请重置默认代码定义以获取新方法签名。 
//
// 
//
// 提示： 
//
// 
// intervals[i][0] <= intervals[i][1] 
// 
// Related Topics 排序 数组 
// 👍 602 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    // [[1,3],[2,6],[4,7],[8,10],[15,18]]
    // 先排序
    intervals.sort((a,b) => a[0] - b[0]);
    let temp = [];
    let temp_i = 0;
    let min = 0;
    let max = 0;
    for(let i = 0 ; i < intervals.length; i++){
        let flag = false;
        if(temp.length == 0){
            temp[0] = [intervals[i][0],intervals[i][1]];
            min = intervals[i][0];
            max = intervals[i][1];
            continue;
        }

        if(intervals[i][0] >= min && intervals[i][0] <= max){
            flag = true;
            if(intervals[i][1] > max){
                max = intervals[i][1];
            }
        }

        if(flag){
            temp[temp_i] = [min,max];
        }else {
            temp_i++;
            temp[temp_i] = [intervals[i][0],intervals[i][1]];
            min = intervals[i][0];
            max = intervals[i][1];
        }

    }

    return temp;
};
//leetcode submit region end(Prohibit modification and deletion)
