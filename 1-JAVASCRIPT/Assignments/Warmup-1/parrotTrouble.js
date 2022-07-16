function parrotTrouble(talking, hour) {
  if (
    (talking == true && hour < 7 == true) ||
    (talking == true && hour > 20 == true)
  ) {
    return true;
  } else {
    return false;
  }
}
let ans = parrotTrouble(true, 4);
console.log(ans);
