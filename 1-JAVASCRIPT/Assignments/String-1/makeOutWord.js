function makeOutWord(out, word) {
  return out.substring(0, 2) + word + out.substring(2, 4);
}
let ans = makeOutWord("[[]]", "Yay");
console.log(ans);
