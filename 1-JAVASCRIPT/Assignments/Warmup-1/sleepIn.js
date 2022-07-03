function sleepIn(weekday, vacation) {
  if (weekday == true && vacation == false) {
    return false;
  } else {
    return true;
  }
}

let ans = sleepIn(true, true);
console.log(ans);
