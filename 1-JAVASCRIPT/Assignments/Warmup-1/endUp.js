function endUp(str) {
  if (str.length <= 3) return str.toUpperCase();
  else
    return (
      str.substring(0, str.length - 3) +
      str.substring(str.length - 3).toUpperCase()
    );
}
let ans = endUp("ict department");
console.log(ans);
