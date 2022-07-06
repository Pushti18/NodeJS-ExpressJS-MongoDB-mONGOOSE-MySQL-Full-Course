function right2(str) {
  return str.substring(str.length - 2) + str.substring(0, str.length - 2);
}
let ans = right2("Hello");
console.log(ans);
