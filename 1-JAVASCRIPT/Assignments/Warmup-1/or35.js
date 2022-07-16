function or35(n) {
  if (n % 3 == 0 || n % 5 == 0) {
    return true;
  } else {
    return false;
  }
}
let ans = or35(13);
console.log(ans);
