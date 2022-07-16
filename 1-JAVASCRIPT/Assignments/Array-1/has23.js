function has23(nums) {
  for (let i = 0; i < nums.length; i++)
    if (nums[i] == 2 || nums[i] == 3) return true;

  return false;
}
let ans = has23([2, 6]);
console.log(ans);
