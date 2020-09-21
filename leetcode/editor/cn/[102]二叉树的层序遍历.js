//给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。 
//
// 
//
// 示例： 
//二叉树：[3,9,20,null,null,15,7], 
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
// 
//
// 返回其层次遍历结果： 
//
// [
//  [3],
//  [9,20],
//  [15,7]
//]
// 
// Related Topics 树 广度优先搜索 
// 👍 643 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    blNode(root,result);
    return result;

};

function blNode(root,result) {

    if(root) {
        let tmp = [];
        result.push(root.val);
        if (root.left) {
            result.push(root.left.val);
        }
        if(root.right) {
            result.push(root.right.val);
        }

        if(root.left && root.left.left){
            blNode(root.left.left,result);
        }
        if(root.right && root.right.right){
            blNode(root.right.right,result);
        }
    }
}
//leetcode submit region end(Prohibit modification and deletion)
