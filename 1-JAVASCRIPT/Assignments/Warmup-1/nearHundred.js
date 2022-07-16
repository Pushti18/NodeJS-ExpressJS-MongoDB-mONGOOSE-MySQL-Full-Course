function nearHundred(n) {
  if (n + 10 >= 100 && n - 10 <= 100) {
    return true;
  } else if (n + 10 >= 200 && n - 10 <= 200) {
    return true;
  } else {
    return false;
  }
}
let ans = nearHundred(191);
console.log(ans);
