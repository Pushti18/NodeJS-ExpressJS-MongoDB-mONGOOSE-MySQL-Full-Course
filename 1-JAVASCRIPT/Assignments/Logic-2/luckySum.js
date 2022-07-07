function luckySum(a, b, c) {
  if (a == 13) return a + b + c - a - b - c;
  if (b == 13) return a + b + c - b - c;
  if (c == 13) return a + b + c - c;

  return a + b + c;
}
let ans = luckySum(1, 2, 3);
console.log(ans);
