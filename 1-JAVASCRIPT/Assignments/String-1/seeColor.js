function seeColor(str) {
  if (str.startsWith("red")) return "red";
  else if (str.startsWith("blue")) return "blue";
  else return "";
}
let ans = seeColor("redcoding");
console.log(ans);
