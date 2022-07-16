function less20(n) {
  return (n + 1) % 20 == 0 || (n + 2) % 20 == 0;
}
let ans = less20(20);
console.log(ans);
