function countAbc(str) {
  if (str.length < 3) return 0;
  if (str.substring(0, 3) == "abc" || str.substring(0, 3) == "aba")
    return 1 + countAbc(str.substring(1));
  return countAbc(str.substring(1));
}
let ans = countAbc("abc");
console.log(ans);
