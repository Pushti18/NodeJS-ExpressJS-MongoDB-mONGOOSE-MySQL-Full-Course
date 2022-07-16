function powerN(base, n) {
  if (n == 1) return base;
  if (n == 0) return 0;
  else return base * powerN(base, n - 1);
}
let ans = powerN(4, 1);
console.log(ans);
