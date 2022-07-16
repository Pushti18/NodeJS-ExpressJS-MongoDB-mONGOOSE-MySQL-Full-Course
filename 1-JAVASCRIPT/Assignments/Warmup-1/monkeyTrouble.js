function monkeyTrouble(aSmile, bSmile) {
  if (
    (aSmile == true && bSmile == false) ||
    (aSmile == false && bSmile == true)
  ) {
    return false;
  } else {
    return true;
  }
}
let ans = monkeyTrouble(false, true);
console.log(ans);
