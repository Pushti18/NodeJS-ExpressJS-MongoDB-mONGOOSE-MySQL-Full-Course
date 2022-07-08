function commonEnd(a, b) {
  return a[0] == b[0] || a.length - 1 == b.length;
}
let ans = commonEnd([1, 2, 3], [7, 3]);
console.log(ans);
