function in3050(a, b) {
  if (
    (a >= 30 && a <= 40 && b >= 30 && b <= 40) ||
    (a >= 40 && a <= 50 && b >= 40 && b <= 50)
  ) {
    return true;
  } else {
    return false;
  }
}
let ans = in3050(40, 39);
console.log(ans);
