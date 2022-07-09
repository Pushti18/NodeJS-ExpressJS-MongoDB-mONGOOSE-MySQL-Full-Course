function nestParen(str) {
  if (str == "" || str == "()") return true;
  if (str.charAt(0) == "(" && str.charAt(str.length - 1) == ")")
    return nestParen(str.substring(1, str.length - 1));
  return false;
}
let ans = nestParen("(())");
console.log(ans);
