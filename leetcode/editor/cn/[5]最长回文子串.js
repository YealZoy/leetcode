//给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。 
//
// 示例 1： 
//
// 输入: "babad"
//输出: "bab"
//注意: "aba" 也是一个有效答案。
// 
//
// 示例 2： 
//
// 输入: "cbbd"
//输出: "bb"
// 
// Related Topics 字符串 动态规划 
// 👍 2680 👎 0

// bb aaaa aba
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length == 0){
        return '';
    }
    if(s.length == 1){
        return s;
    }

    let result = ''

    for(let i = 0; i < s.length; i++){
        for(let j = 0; j  < s.length - i + 1; j++){
            let str = s.substring(i,i + j);
            if(judgeHw(str)){
                if(str.length >= result.length){
                    result = str;
                }
            }

        }
    }

    if(result == ''){
        result = s[0];
    }
    //console.log(result);
    return result;

};

var judgeHw = function (s) {

    let left_end = parseInt(s.length / 2 - 1);
    let right_start = Math.ceil(s.length / 2);


    let left = s.substring(0,left_end + 1).split('').reverse().join('');
    let right = s.substring(right_start);

    if(left == right){
        return true;
    }else {
        return false;
    }
}
//longestPalindrome('jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx');
//leetcode submit region end(Prohibit modification and deletion)


// 1 0 0
// 12 0 1
// 123 0 2
// 1234 1 2
// 12345 1 3
// 123456 2 3
// 1234567 2 4


