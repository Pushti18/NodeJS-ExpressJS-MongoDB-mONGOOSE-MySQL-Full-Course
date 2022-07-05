function altPairs(str) {
  let p = "";

  for (let i = 0; i < str.length; i += 4) {
    let q = i + 2;
    if (q > str.length) {
      q = str.length;
    }
    p = p + str.substring(i, q);
  }
  return p;
}
let ans = altPairs("kitten");
console.log(ans);
