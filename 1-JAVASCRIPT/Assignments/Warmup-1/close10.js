function close10(a, b) {
  a1 = Math.abs(a - 10);
  b1 = Math.abs(b - 10);
  if (a1 < b1) return a;
  if (b1 < a1) return b;
  else return 0;
}
let ans = close10(8, 13);
console.log(ans);
