function extraEnd(str) {
  return (
    str[str.length - 2] +
    str[str.length - 1] +
    (str[str.length - 2] + str[str.length - 1]) +
    (str[str.length - 2] + str[str.length - 1])
  );
}
let ans = extraEnd("Yay");
console.log(ans);
