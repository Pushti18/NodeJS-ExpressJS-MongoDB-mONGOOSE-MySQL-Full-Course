function makeBricks(small, big, goal) {
  if (goal > big * 5 + small) return false;
  else if (goal % 5 > small) return false;
  else return true;
}
let ans = makeBricks(3, 1, 8);
console.log(ans);
