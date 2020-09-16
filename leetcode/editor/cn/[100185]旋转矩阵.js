//给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。 
//
// 不占用额外内存空间能否做到？ 
//
// 
//
// 示例 1: 
//
// 给定 matrix = 
//[
//  [1,2,3], [0,0],[0,1],[0,2]
//  [4,5,6], [1,0],[1,1],[1,2]
//  [7,8,9]  [2,0],[2,1],[2,2]
//],
//
//原地旋转输入矩阵，使其变为:
//[
//  [7,4,1], [2,0],[1,0],[0,0]
//  [8,5,2], [2,1],[1,1],[0,1]
//  [9,6,3]  [2,2],[1,2],[0,2]
//]
// 
//
// 示例 2: 
//
// 给定 matrix =
//[
//  [ 5, 1, 9,11], [0,0],[0,1],[0,2],[0,3]
//  [ 2, 4, 8,10], [1,0],[1,1],[1,2],[1,3]
//  [13, 3, 6, 7], [2,0],[2,1],[2,2],[2,3]
//  [15,14,12,16]  [3,0],[3,1],[3,2],[3,3]
//], 
//
//原地旋转输入矩阵，使其变为:
//[
//  [15,13, 2, 5], [3,0],[2,0],[1,0],[0,0]
//  [14, 3, 4, 1], [3,1],[2,1],[1,1],[0,1]
//  [12, 6, 8, 9], [3,2],[2,2],[1,2],[0,2]
//  [16, 7,10,11]  [3,3],[2,3],[1,3],[0,3]
//]
// 
// Related Topics 数组 
// 👍 121 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let result = []
    for(let i = 0; i < matrix.length; i++){
        result[i] = [];
        for(let j = 0; j < matrix[i].length; j++){
            result[i][j] = matrix[matrix[i].length - j - 1][i];
        }
    }
    console.log(result);
    matrix = result;
    console.log(matrix);
    return matrix;
};
//leetcode submit region end(Prohibit modification and deletion)
