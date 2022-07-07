function xyBalance(str) {
  if (str.lastIndexOf("y") > str.lastIndexOf("x")) return true;
  else if (str.lastIndexOf("x") == str.lastIndexOf("y")) return true;
  else return false;
}
let ans = xyBalance("aaxbb");
console.log(ans);
