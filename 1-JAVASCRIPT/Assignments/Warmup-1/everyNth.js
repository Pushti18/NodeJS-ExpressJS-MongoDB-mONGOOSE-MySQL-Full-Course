function everyNth(str, n) {
  let p = "";
  for (let i = 0; i < str.length; i = +n) {
    p = p + str.charAt(i);
  }

  return p;
}
let ans = everyNth("Code", 3);
console.log(ans);
