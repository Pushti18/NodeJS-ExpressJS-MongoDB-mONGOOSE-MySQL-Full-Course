function answerCell(isMorning, isMom, isAsleep) {
  if (isAsleep) return false;
  else if ((isMorning && isMom) || !isMorning) return true;
  else return false;
}
let ans = answerCell(false, false, false);
console.log(ans);
