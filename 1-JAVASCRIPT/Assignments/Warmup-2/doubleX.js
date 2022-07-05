function doubleX(str) {
  if (str.indexOf("x") != -1) {
    return str.indexOf("x") == str.indexOf("xx");
  } else {
    return false;
  }
}
let ans = doubleX("xaxxx");
console.log(ans);
