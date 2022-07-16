function firstTwo(str) {
  if (str.length < 2) return str;
  else return str.substring(0, 2);
}
let ans = firstTwo("Yay");
console.log(ans);
