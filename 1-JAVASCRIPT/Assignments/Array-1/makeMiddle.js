function makeMiddle(nums) {
  return [nums[nums.length / 2 - 1], nums[nums.length / 2]];
}
let ans = makeMiddle([1, 2, 3, 4]);
console.log(ans);
