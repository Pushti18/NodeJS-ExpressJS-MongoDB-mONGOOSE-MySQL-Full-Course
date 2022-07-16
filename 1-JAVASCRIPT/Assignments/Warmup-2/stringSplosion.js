function stringSplosion(str) {
  let a = "";

  for (let i = 0; i < str.length + 1; i++) {
    a += str.substring(0, i);
  }
  return a;
}
let ans = stringSplosion("Code");
console.log(ans);
