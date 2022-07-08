function sum2(nums) {
  if (nums.length == 0) return 0;
  else if (nums.length == 1) return nums[0];
  else return nums[1] + nums[0];
}
let ans = sum2([1, 2, 3]);
console.log(ans);
