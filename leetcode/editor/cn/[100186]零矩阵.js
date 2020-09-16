//编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。 
//
// 
//
// 示例 1： 
//
// 输入：
//[
//  [1,1,1],
//  [1,0,1],
//  [1,1,1]
//]
//输出：
//[
//  [1,0,1],
//  [0,0,0],
//  [1,0,1]
//]
// 
//
// 示例 2： 
//
// 输入：
//[
//  [0,1,2,0],
//  [3,4,5,2],
//  [1,3,1,5]
//]
//输出：
//[
//  [0,0,0,0],
//  [0,4,5,0],
//  [0,3,1,0]
//]
// 
// Related Topics 数组 
// 👍 15 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let setZ = [];
    for(let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == 0){
                // 行 为0
                let t = 0;
                while (t < matrix[i].length){
                    setZ.push([i,t]);
                    t++;
                }

                //列 为 0
                let t2 = 0;
                while (t2 < matrix.length){
                    setZ.push([t2,j]);
                    t2++;
                }
            }
        }
    }

    for(let m = 0; m < setZ.length; m++){
        matrix[setZ[m][0]][setZ[m][1]] = 0;
    }
    //console.log(matrix)
    return matrix;
};

//leetcode submit region end(Prohibit modification and deletion)
