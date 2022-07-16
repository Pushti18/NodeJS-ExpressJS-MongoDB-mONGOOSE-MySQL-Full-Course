function bunnyEars2(bunnies) {
  if (bunnies == 0) return 0;

  if (bunnies % 2 == 1) return 2 + bunnyEars2(bunnies - 1);

  return 3 + bunnyEars2(bunnies - 1);
}
let ans = bunnyEars2(4);
console.log(ans);
