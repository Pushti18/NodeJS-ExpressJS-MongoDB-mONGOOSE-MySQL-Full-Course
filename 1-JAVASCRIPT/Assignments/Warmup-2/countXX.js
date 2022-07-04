function countXX(str) {
  let p = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf("xx", i) == i) {
      p++;
    }
  }
  return p;
}
let ans = countXX("abcxx");
console.log(ans);
