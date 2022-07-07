function in1To10(n, outsideMode) {
  if (outsideMode == false && n >= 1 && n <= 10) return true;
  else if (outsideMode == true && (n <= 1 || n >= 10)) return true;
  else return false;
}
let ans = in1To10(5, false);
console.log(ans);
