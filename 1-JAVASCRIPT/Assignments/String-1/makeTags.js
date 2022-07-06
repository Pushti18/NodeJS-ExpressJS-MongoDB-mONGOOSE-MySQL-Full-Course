function makeTags(tag, word) {
  return "<" + tag + ">" + word + "</" + tag + ">";
}
let ans = makeTags("i", "Yay");
console.log(ans);
