function arrayFront9(nums) {
  let p = 0;

  for (let i = 0; i < 4; i++) {
    if (nums[i] == 9) p++;
  }
  if (p > 0) return true;
  else return false;
}
let ans = arrayFront9([1, 9, 9, 3, 2, 5]);
console.log(ans);
