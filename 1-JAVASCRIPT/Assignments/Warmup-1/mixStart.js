function mixStart(str) {
  if (str.startsWith("ix", 1)) {
    return true;
  } else {
    return false;
  }
}
let ans = mixStart("pix ict");
console.log(ans);
