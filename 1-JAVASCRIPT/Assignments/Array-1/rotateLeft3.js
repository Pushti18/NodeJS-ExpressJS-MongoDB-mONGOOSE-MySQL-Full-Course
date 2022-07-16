function rotateLeft3(nums) {
  let a = [nums[1], nums[2], nums[0]];
  return a;
}
let ans = rotateLeft3([1, 2, 3]);
console.log(ans);
