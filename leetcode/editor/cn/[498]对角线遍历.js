//给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。 
//
// 
//
// 示例: 
//
// 输入:
//[
// [ 1, 2, 3,9,0],
// [ 4, 5, 6,0,0],
// [ 7, 8, 9,7,0],
//]
//输出:  [1,2,4,7,5,3,6,8,9]
//
//
//解释:
//
//
// 
//
// 说明: 
//
// 
// 给定矩阵中的元素总数不会超过 100000 。 
// 
// 👍 124 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    let result = [];
    if(matrix.length == 0 || matrix[0].length == 0){
        return [];
    }
    let col = matrix[0].length;
    let row = matrix.length;
    let size = row * col;
    let tmp_x = 0;
    let tmp_y = 0;
    let flag = true; // true 为 右上  false 为左下

    while (tmp_x < row && tmp_y < col){
        if(result.length  > size - 1 ){
            break;
        }
        result.push(matrix[tmp_x][tmp_y]);
        if(flag){
            //右 上
            if(tmp_x - 1 >= 0 && tmp_y + 1 < col){
                tmp_x = tmp_x - 1;
                tmp_y = tmp_y + 1;
            }else {

                // 右上  越界
                flag = false;

                if(tmp_x - 1 < 0){
                    if(tmp_y + 1 < col){
                        tmp_y = tmp_y + 1;
                    }else {
                        tmp_x = tmp_x + 1;
                    }
                    continue;
                }

                if(tmp_y + 1 >= col){
                    if(tmp_x + 1 < row){
                        tmp_x = tmp_x + 1;
                    }else {
                        tmp_y = tmp_y +  1;
                    }
                    continue;
                }



            }

        }else {
            // 左下
            if(tmp_x + 1 < row && tmp_y - 1 >= 0){
                tmp_x = tmp_x + 1;
                tmp_y = tmp_y - 1;
            } else {
                flag = true;

                // 左下 越界
                if(tmp_y - 1 < 0){
                    if(tmp_x + 1 < row){
                        tmp_x = tmp_x + 1;
                    }else {
                        tmp_y = tmp_y + 1;
                    }
                    continue;
                }

                if(tmp_x + 1 >= row){
                    if(tmp_y + 1 < col){
                        tmp_y = tmp_y + 1;
                    }else {
                        tmp_x = tmp_x + 1;
                    }
                    continue;
                }



            }
        }
    }
    //console.log(result)
    return result;
};
// findDiagonalOrder([
//     [2,5],
//     [8,4],
//     [0,-1]
// ]);

//leetcode submit region end(Prohibit modification and deletion)
