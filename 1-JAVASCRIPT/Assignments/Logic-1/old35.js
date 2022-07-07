function old35(n) {
  return (n % 3 == 0) != (n % 5 == 0);
}
let ans = old35(20);
console.log(ans);
