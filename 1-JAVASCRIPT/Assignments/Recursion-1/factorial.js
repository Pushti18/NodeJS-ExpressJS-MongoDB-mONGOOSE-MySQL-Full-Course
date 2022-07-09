function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
let ans = factorial(4);
console.log(ans);
