function sameFirstLast(nums) {
  if (nums.length >= 1 && nums[0] == nums[nums.length - 1]) return true;
  else return false;
}
let ans = sameFirstLast([1, 2, 3]);
console.log(ans);
