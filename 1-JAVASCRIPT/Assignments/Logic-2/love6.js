function love6(a, b) {
  let a1 = Math.abs(a - b);
  if (a == 6 || b == 6) return true;
  if (a + b == 6 || a1 == 6) return true;
  else return false;
}
let ans = love6(6, 4);
console.log(ans);
