function missingChar(str, n) {
  return str.substring(0, n) + str.substring(n + 1);
}
let ans = missingChar("kitten", 4);
console.log(ans);
