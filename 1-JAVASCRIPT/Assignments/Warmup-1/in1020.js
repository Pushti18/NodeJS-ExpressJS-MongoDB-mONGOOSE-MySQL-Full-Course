function in1020(a, b) {
  if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) {
    return true;
  } else {
    return false;
  }
}
let ans = in1020(125, 10);
console.log(ans);
