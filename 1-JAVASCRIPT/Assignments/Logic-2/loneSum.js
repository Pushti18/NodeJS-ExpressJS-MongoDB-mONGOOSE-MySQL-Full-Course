function loneSum(a, b, c) {
  if (a == b && b == c) return 0;
  if (a == b) return c;
  if (a == c) return b;
  if (b == c) return a;
  return a + b + c;
}
let ans = loneSum(1, 2, 3);
console.log(ans);
