function noTriples(nums) {
  for (let i = 0; i < nums.length; i++)
    if (nums[i] == nums[i + 1] && nums[i + 1] == nums[i + 2]) return false;
  return true;
}
let ans = noTriples([1, 1, 2, 2, 1]);
console.log(ans);
