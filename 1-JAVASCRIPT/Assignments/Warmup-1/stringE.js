function stringE(str) {
  let p = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "e") {
      p++;
    }
  }
  if (p === 1 || p === 3) {
    return true;
  }
  return false;
}
let ans = stringE("Hello");
console.log(ans);
