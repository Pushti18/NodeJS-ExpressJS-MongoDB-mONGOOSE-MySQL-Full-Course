function teenSum(a, b) {
  if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) return 19;
  else return a + b;
}
let ans = teenSum(3, 7);
console.log(ans);
