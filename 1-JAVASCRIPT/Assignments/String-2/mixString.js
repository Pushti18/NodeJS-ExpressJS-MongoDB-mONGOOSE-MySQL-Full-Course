function mixString(a, b) {
  let p = "";

  for (let i = 0; i < Math.max(a.length, b.length); i++)
    p += a.charAt(i) + b.charAt(i);

  return p;
}
let ans = mixString("abc", "xyz");
console.log(ans);
