function getSandwich(str) {
  let a = str.indexOf("bread");
  let b = str.lastIndexOf("bread");
  if (b != -1 && a != b) return str.substring(a + 5, b);
  else return "";
}
let ans = getSandwich("breadjambread");
console.log(ans);
