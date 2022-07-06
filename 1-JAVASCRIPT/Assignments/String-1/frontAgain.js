function frontAgain(str) {
  if (str.length < 2) return false;
  else if (str.substring(0, 2) == str.substring(str.length - 2)) return true;
  else return false;
}
let ans = frontAgain("redcodingre");
console.log(ans);
