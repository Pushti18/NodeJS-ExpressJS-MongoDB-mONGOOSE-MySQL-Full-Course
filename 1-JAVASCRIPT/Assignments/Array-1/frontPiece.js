function frontPiece(nums) {
  if (nums.length <= 1) return nums;
  else return [nums[0], nums[1]];
}
let ans = frontPiece([1, 2, 3]);
console.log(ans);
