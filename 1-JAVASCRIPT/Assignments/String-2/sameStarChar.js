function sameStarChar(str) {
  for (let i = 1; i < str.length - 1; i++) {
    if (str.charAt(i) == "*" && str.charAt(i - 1) != str.charAt(i + 1))
      return false;
  }
  return true;
}
let ans = sameStarChar("xy*yzz");
console.log(ans);
