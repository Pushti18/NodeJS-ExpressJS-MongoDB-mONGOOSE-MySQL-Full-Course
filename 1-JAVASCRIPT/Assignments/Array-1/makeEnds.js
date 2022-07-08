function makeEnds(nums) {
  return [nums[0], nums[nums.length - 1]];
}
let ans = makeEnds([1, 2, 6]);
console.log(ans);
