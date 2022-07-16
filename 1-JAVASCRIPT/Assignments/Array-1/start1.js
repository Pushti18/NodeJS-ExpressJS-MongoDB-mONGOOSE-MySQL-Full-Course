function start1(a, b) {
  var p = 0;
  if (a.length > 0) {
    if (a[0] == 1) {
      p += 1;
    }
  }
  if (b.length > 0) {
    if (b[0] == 1) {
      p += 1;
    }
  }
  return p;
}
let ans = start1([1, 2, 3], [1, 3]);
console.log(ans);
