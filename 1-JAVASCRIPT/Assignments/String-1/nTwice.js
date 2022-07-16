function nTwice(str, n) {
  return str.substring(0, n) + str.substring(str.length - n);
}
let ans = nTwice("Practice", 2);
console.log(ans);
