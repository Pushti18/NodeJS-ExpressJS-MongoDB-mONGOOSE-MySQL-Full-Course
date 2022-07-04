function posNeg(a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  } else {
    return (a < 0 && b > 0) || (a > 0 && b < 0);
  }
}
let ans = posNeg(1, -1, false);
console.log(ans);
