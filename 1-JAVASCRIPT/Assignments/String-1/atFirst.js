function atFirst(str) {
  if (str.length == 0) return "@@";
  if (str.length < 2) return str + "@";
  else return str.substring(0, 2);
}
let ans = atFirst("");
console.log(ans);
