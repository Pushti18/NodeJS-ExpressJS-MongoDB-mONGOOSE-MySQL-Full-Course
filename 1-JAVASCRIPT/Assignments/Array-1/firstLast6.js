function firstLast6(nums) {
  if (nums[0] == 6 || nums[nums.length - 1] == 6) return true;
  else return false;
}
let ans = firstLast6([1, 2, 6]);
console.log(ans);
