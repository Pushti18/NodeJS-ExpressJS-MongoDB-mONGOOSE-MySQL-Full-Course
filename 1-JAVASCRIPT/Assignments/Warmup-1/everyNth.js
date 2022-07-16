function everyNth(str, n) {
  let s = "";
  for (let i = 0; i < str.length; ) {
    s += str.charAt(i);
    i += n;
  }
  return s;
}
let ans = everyNth("Code", 3);
console.log(ans);
