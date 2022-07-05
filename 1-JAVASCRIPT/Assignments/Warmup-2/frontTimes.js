function frontTimes(str, n) {
  let p = 3;
  if (p > str.length) p = str.length;
  let a = "";
  for (let i = 0; i < n; i++) a = a + str.substring(0, p);
  return a;
}
let ans = frontTimes("Chocolate", 3);
console.log(ans);
