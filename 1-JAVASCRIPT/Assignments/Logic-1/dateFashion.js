function dateFashion(you, date) {
  if (you <= 2 || date <= 2) return 0;
  if ((you >= 8 && date > 2) || (date >= 8 && you > 2)) return 2;
  else return 1;
}
let ans = dateFashion(4, 10);
console.log(ans);
