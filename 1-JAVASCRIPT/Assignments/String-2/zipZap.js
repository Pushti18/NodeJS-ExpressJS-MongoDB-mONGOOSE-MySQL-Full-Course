function zipZap(str) {
  var p = "";

  if (str.length <= 2) {
    return str;
  }

  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == "z" && str.charAt(i + 2) == "p") {
      p = p + str.charAt(i);
      p = p + str.charAt(i + 2);
      i = i + 2;
    } else {
      p = p + str.charAt(i);
    }
  }
  return p;
}
let ans = zipZap("zipXzap");
console.log(ans);
