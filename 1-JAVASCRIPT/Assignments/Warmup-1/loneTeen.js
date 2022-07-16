function loneTeen(a, b) {
  if (a >= 13 && a <= 19 && (b < 13 || b > 19)) {
    return true;
  } else if ((a < 13 || a > 19) && b >= 13 && b <= 19) {
    return true;
  } else {
    return false;
  }
}
let ans = loneTeen(99, 20);
console.log(ans);
