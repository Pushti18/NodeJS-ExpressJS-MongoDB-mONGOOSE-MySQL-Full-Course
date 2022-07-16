function alarmClock(day, vacation) {
  if (day >= 1 && day <= 5 && !vacation) return "7:00";
  else if (
    ((day == 0 || day == 6) && !vacation) ||
    (day >= 1 && day <= 5 && vacation)
  )
    return "10:00";
  else return "off";
}
let ans = alarmClock(1, false);
console.log(ans);
