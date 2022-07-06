function withoutX2(str) {
  if (str.length < 2) return "";
  else if (str.charAt(0) == "x" && str.charAt(1) == "x")
    return str.substring(2);
  else if (str.charAt(0) == "x") return str.substring(1);
  else if (str.charAt(1) == "x") return str.substring(0, 1) + str.substring(2);
  else return str;
}
let ans = withoutX2("xHix");
console.log(ans);
