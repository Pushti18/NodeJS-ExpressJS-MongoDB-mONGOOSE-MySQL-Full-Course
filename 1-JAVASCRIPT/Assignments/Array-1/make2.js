function make2(a, b) {
  if (a.length >= 2) return [a[0], a[1]];
  else if (a.length == 1) return [a[0], b[0]];
  else return [b[0], b[1]];
}
let ans = make2([4, 5], [1, 2, 3]);
console.log(ans);
