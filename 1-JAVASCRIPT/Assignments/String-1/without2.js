function without2(str) {
  if (str.length < 2) return str;
  else if (str.substring(str.length - 2) == str.substring(0, 2))
    // return str.substring(str.length-2);
    return str.substring(2);
  else return str;
}
let ans = without2("HelloHe");
console.log(ans);
