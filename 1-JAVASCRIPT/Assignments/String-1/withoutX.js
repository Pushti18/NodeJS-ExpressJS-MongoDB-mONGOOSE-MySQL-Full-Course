function withoutX(str) {
  if (str.length > 0 && str.charAt(0) == "x") str = str.substring(1);

  if (str.length >= 1 && str.charAt(str.length - 1) == "x")
    str = str.substring(0, str.length - 1);

  return str;
}
let ans = withoutX("xHix");
console.log(ans);
