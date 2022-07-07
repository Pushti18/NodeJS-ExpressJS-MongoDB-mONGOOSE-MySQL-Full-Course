function squirrelPlay(temp, isSummer) {
  if (isSummer && temp <= 100 && temp >= 60) return true;
  else if (isSummer != temp && temp <= 90 && temp >= 60) return true;
  else return false;
}
let ans = squirrelPlay(70, false);
console.log(ans);
