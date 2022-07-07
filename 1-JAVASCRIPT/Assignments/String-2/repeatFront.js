function repeatFront(str, n) {
  let a = "";
  for (let i = 0; n > 0; i--) a += str.substring(0, n);
  return a;
}
let ans = repeatFront("Hello", 3);
console.log(ans);
