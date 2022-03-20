/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const n = s.length
  let arr = Array(numRows).fill('')

  for (let i = 0, j = 0, isDown = true; i < n; i++) {
    if (j === numRows) {
      j = 1
      isDown = !isDown
    }
    if (isDown) {
      arr[j] += s[i]
    } else {
      arr[numRows - 1 - j] += s[i]
    }
    j++
  }
  return arr.join('')
};

const main = () => {
  const s = "PAYPALISHIRING", numRows = 3
  const rst = convert(s, numRows)
  console.log(rst);
};
main();