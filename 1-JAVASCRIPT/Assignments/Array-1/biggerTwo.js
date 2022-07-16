function biggerTwo(a, b) {
  if (a[0] + a[1] < b[0] + b[1]) return b;
  else return a;
}
let ans = biggerTwo([1, 2], [3, 4]);
console.log(ans);
