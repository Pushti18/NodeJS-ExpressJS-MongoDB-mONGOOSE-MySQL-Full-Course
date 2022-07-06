function twoChar(str, index) {
  if (index < 0 || index + 2 > str.length) return str.substring(0, 2);
  else return str.substring(index, index + 2);
}
let ans = twoChar("Practice", 3);
console.log(ans);
