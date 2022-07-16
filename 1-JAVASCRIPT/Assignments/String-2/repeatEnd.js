function repeatEnd(str, n) {
  let a = "";
  for (let i = 0; i < n; i++) a += str.substring(str.length - n);
  return a;
}
let ans = repeatEnd("Hello", 3);
console.log(ans);
