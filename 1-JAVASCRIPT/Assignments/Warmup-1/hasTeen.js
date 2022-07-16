function hasTeen(a, b, c) {
  if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)) {
    return true;
  } else {
    return false;
  }
}
let ans = hasTeen(13, 20, 10);
console.log(ans);
