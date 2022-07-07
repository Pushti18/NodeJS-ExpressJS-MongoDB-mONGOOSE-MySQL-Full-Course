function caughtSpeeding(speed, isBirthday) {
  //   if(isBirthday)
  //     speed -=5;
  //   else if(speed<=60)
  //     return 0;
  //   else
  //     return (speed>60 && speed <=80);
  if (speed <= 60 || (isBirthday && speed <= 65)) return 0;
  if ((speed >= 60 && speed <= 80) || (isBirthday && speed <= 85)) return 1;
  else return 2;
}
let ans = caughtSpeeding(70, false);
console.log(ans);
