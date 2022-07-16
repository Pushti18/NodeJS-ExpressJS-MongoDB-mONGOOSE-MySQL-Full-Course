function repeatSeparator(word, sep, count) {
  let p = "";
  for (let i = 0; i < count; i++) p = p + word + sep;
  return p.substring(0, p.lastIndexOf(sep));
}
let ans = repeatSeparator("Hello", "hi", 3);
console.log(ans);
