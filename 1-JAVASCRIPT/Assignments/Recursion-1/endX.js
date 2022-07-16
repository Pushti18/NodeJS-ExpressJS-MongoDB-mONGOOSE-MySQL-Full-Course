function endX(str) {
  if (str.length == 0) return "";
  if (str.charAt(0) == "x") {
    return endX(str.substring(1)) + "x";
  }
  return str.charAt(0) + endX(str.substring(1));
}
let ans = endX("xxre");
console.log(ans);
