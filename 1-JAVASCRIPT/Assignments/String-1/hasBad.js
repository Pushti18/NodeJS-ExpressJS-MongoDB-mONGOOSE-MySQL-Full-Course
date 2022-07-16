function hasBad(str) {
  if (
    str.substring(0, str.length - 2) == "bad" ||
    str.substring(1, str.length) == "bad"
  )
    return true;
  else return false;
}
let ans = hasBad("badxx");
console.log(ans);
