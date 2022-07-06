function withoutEnd2(str) {
  if (str.length >= 2) return str.substring(1, str.length - 1);
  else return "";
}
let ans = withoutEnd2("Hello");
console.log(ans);
