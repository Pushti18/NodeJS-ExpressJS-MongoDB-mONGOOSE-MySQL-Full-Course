function countTriple(str) {
  let p = 0;
  for (let i = 0; i < str.length - 2; i++)
    if (
      str.charAt(i) == str.charAt(i + 1) &&
      str.charAt(i + 1) == str.charAt(i + 2)
    )
      p++;
  return p;
}
let ans = countTriple("abcXXXabc");
console.log(ans);
