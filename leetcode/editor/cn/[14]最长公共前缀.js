//编写一个函数来查找字符串数组中的最长公共前缀。 
//
// 如果不存在公共前缀，返回空字符串 ""。 
//
// 示例 1: 
//
// 输入: ["flower","flow","flight"]
//输出: "fl"
// 
//
// 示例 2: 
//
// 输入: ["dog","racecar","car"]
//输出: ""
//解释: 输入不存在公共前缀。
// 
//
// 说明: 
//
// 所有输入只包含小写字母 a-z 。 
// Related Topics 字符串 
// 👍 1263 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return '';
    }

    // 找出最小 长度
    let min_length = strs[0].length;
    let min_index = 0;
    for(let i = 1; i < strs.length; i++){
        if(strs[i].length < min_length){
            min_length = strs[i].length;
            min_index = i;
        }
    }

    let min_str = strs[min_index];
    let tmp = min_str.length;
    while (tmp > 0){
        let substr = '';
        let flag = true;
        for(let i = 0; i < strs.length; i++){
            substr = strs[i].substring(0,tmp);
            let min_sub_str = min_str.substring(0,tmp);
            if(min_sub_str != substr){
                flag = false;
                break;
            }
        }

        if(flag){
            //console.log(substr)
            return substr;
        }

        tmp--;

    }
    return '';

};
//longestCommonPrefix(["a"])
//leetcode submit region end(Prohibit modification and deletion)
