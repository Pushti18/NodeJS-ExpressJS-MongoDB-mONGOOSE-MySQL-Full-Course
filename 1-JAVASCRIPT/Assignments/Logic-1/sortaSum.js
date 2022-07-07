function sortaSum(a, b) {
  if (a + b >= 10 && a + b <= 19) return 20;
  else return a + b;
}
let ans = sortaSum(3, 8);
console.log(ans);
