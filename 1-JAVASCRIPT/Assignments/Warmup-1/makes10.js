function makes10(a, b) {
  if (a == 10 && b == 10) {
    return true;
  } else if (a == 10 && b < 10) {
    return true;
  } else if (a < 10 && b == 10) {
    return true;
  } else if (a == 10 && b > 10) {
    return true;
  } else if (a + b == 10) {
    return true;
  } else {
    return false;
  }
}
let ans = makes10(6, 4);
console.log(ans);
