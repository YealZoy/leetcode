//给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。 
//
// 
//
// 在杨辉三角中，每个数是它左上方和右上方的数的和。 
//
// 示例: 
//
// 输入: 5
//输出:
//[
//     [1],
//    [1,1],
//   [1,2,1],
//  [1,3,3,1],
// [1,4,6,4,1]
//] 
// Related Topics 数组 
// 👍 349 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    for(let i = 0; i < numRows; i++){
        let inArr = [];
        if(i == 0){
            inArr.push(1);
            result.push(inArr);
            continue;
        }

        let t = 0;
        while (t <= i){
            if(t == 0 || t == i){
                inArr[t] = 1;
                t++;
                continue;
            }

            //let zsf = result[ i - 1][ t - 1];
            //let ysf = result[ i - 1][t];
            inArr[t] = result[ i - 1][ t - 1] + result[ i - 1][t];
            t++;
        }
        result.push(inArr);
    }
    //console.log(result);
    return result;
};
//generate(5);
//leetcode submit region end(Prohibit modification and deletion)
