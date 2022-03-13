/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let cache = new Set();
    let maxLen = 0;
    const sLen = s.length;
    let rk = -1
    for (let i = 0; i < sLen; i++) {
        if (i > 0) {
            cache.delete(s[i - 1]);
        }
        while (rk + 1 < sLen && !cache.has(s[rk + 1])) {
            cache.add(s[rk + 1])
            rk++
        }
        maxLen = Math.max(maxLen, rk - i + 1);
    }
    return maxLen;
};

const main = () => {
    const rst = lengthOfLongestSubstring('abcabcbb')
    console.log(rst);
}

main();