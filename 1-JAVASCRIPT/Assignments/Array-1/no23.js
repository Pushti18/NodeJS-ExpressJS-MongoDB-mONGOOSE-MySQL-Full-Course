function no23(nums) {
  for (let i = 0; i < nums.length; i++)
    if (nums[i] == 2 || nums[i] == 3) return false;

  return true;
}
let ans = no23([2, 6]);
console.log(ans);
