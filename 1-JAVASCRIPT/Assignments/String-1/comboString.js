function comboString(a, b) {
  if (a.length > b.length) return b + a + b;
  else return a + b + a;
}
let ans = comboString("WooHoo", "ict");
console.log(ans);
