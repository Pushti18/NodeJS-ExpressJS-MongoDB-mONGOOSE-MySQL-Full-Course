function unlucky1(nums) {
  //   for (let i = 0; i < nums.length-1; i++) {
  //     if (nums[i] == 1 && nums[i+1] == 3)
  //       return true;
  //   }
  //   return false;
  if (nums.length < 2) {
    return false;
  } else if (
    (nums[0] == 1 && nums[1] == 3) ||
    (nums[nums.length - 2] == 1 && nums[nums.length - 1] == 3)
  ) {
    return true;
  } else if (nums.length > 2 && nums[1] == 1 && nums[2] == 3) {
    return true;
  } else return false;
}
let ans = unlucky1([1, 3, 4, 5]);
console.log(ans);
