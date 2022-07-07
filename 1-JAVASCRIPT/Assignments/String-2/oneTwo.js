function oneTwo(str) {
  var p = "";
  for (var i = 0; i < str.length - 2; i += 3)
    p = p + str.substring(i + 1, i + 3) + str.charAt(i);
  return p;
}
let ans = oneTwo("abc");
console.log(ans);
