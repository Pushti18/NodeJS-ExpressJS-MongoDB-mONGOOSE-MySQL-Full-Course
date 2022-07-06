function extraFront(str) {
  if (str.length <= 2) return str + str + str;
  else {
    let p = str.substring(0, 2);

    return p + p + p;
  }
}
let ans = extraFront("redcoding");
console.log(ans);
