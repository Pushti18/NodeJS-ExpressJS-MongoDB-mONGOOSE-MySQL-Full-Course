function changePi(str) {
  if (str.length < 2) return str;
  if (str.substring(0, 2) == "pi") return "3.14" + changePi(str.substring(2));
  return str.charAt(0) + changePi(str.substring(1));
}
let ans = changePi("xpix");
console.log(ans);
