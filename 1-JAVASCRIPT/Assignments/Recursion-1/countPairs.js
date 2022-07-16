function countPairs(str) {
  if (str.length <= 2) return 0;
  if (str.charAt(0) == str.charAt(2)) return 1 + countPairs(str.substring(1));
  else return countPairs(str.substring(1));
}
let ans = countPairs("axa");
console.log(ans);
