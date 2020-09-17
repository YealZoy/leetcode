//给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。 
//
// 
//
// 在杨辉三角中，每个数是它左上方和右上方的数的和。 
//
// 示例: 
//
// 输入: 3
//输出: [1,3,3,1]
// 
//
// 进阶： 
//
// 你可以优化你的算法到 O(k) 空间复杂度吗？ 
// Related Topics 数组 
// 👍 178 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [];
    for(let i = 0; i <= rowIndex; i++){
        let inArr = [];
        if(i == 0){
            inArr.push(1);
            result[i] = inArr;

            if(rowIndex == 0){
                return inArr;
            }
            continue;
        }

        let t = 0;
        while (t <= i){
            if(t == 0 || t == i){
                inArr[t] = 1;
                t++;
                continue;
            }

            inArr[t] = result[ i - 1][ t - 1] + result[ i - 1][t];
            t++;
        }
        result[i] = inArr;
        if(i == rowIndex){
            return inArr;
        }
    }
};
//leetcode submit region end(Prohibit modification and deletion)
