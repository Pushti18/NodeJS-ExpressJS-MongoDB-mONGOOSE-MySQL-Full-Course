function lastTwo(str) {
  if (str.length < 2) return str;
  //    let p = str.substring(0,4);
  else
    return (
      str.substring(0, str.length - 2) +
      str.charAt(str.length - 1) +
      str.charAt(str.length - 2)
    );
}
let ans = lastTwo("coding");
console.log(ans);
