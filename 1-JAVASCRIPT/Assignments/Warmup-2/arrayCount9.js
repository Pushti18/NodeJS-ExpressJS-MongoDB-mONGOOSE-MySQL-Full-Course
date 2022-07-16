function arrayCount9(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 9) count++;
  }
  return count;
}
let ans = arrayCount9([1, 9, 9, 3, 2, 5]);
console.log(ans);
