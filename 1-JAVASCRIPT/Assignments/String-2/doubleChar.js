function doubleChar(str) {
  let a = "";
  for (let i = 0; i < str.length; i++) a = a + str.charAt(i) + str.charAt(i);
  return a;
}
let ans = doubleChar("the");
console.log(ans);
