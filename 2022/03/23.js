/**
 * @param {string[]} strs
 * @return {string}
 */
 function longestCommonPrefix(strs) {
    var re = '';
    if (!strs.length) return re;
    for (var j=0;j<strs[0].length;j++){//第j位
        for (var i=1;i<strs.length;i++){//第i个
            if (strs[i][j]!=strs[0][j]) return re
        }
        re += strs[0][j];
    }
    return re;
};

const main = () => {
    const x = ["flower","flow","flight"]
    const rst = longestCommonPrefix(x)
    console.log(rst);
};

main();