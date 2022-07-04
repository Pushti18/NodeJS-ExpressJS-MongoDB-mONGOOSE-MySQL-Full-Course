function front3(str) {
  if (str.length <= 3) return str + str + str;
  else {
    let p = str.substring(0, 3);

    return p + p + p;
  }
}
let ans = front3("pushti");
console.log(ans);
