function notString(str) {
  if (str.startsWith("not")) {
    return str;
  } else {
    return "not" + " " + str;
  }
}
let ans = notString("candy");
console.log(ans);
