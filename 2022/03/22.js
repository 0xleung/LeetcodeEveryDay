/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  const isPositive = x > 0
  const arr = (Math.abs(x)+'').split('')
  const pos = arr.reverse().join('')*1
  const r = isPositive ? pos : 0 - pos
  return r > (-2)**31 && r < (2**31)-1 ? r : 0
};

const main = () => {
  const x = -123
  const rst = reverse(x)
  console.log(rst);
};
main();