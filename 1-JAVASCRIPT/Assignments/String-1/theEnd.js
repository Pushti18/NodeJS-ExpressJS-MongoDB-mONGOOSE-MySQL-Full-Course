function theEnd(str, front) {
  if (front) return str.substring(0, 1);
  else return str.substring(str.length - 1);
}
let ans = theEnd("Hello", false);
console.log(ans);
