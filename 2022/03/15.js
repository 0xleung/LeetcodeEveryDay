/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if(s.length <2){
        return s
    }
    let res = ''
    function f(m, n){
        while(m >=0 && n < s.length && s[m] === s[n]){
            m--
            n++
        }
        if(n-m-1 > res.length){
            res = s.slice(m+1, n)
        }
    }
    for(let i = 0; i < s.length; i++){
        f(i,i)
        f(i, i+1)
    }
    return res
};


const main = () => {
    const rst = longestPalindrome('babad')
    console.log(rst);
};
main();