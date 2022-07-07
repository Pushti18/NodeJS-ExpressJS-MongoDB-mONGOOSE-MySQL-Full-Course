function xyzThere(str) {
  // let a =0;
  for (let i = 0; i < str.length - 2; i++)
    if (str.substring(i, i + 3) == "xyz" && str.charAt(i - 1) != ".")
      return true;
  //else
  //  return str.split('code').length-1;
  return false;
}
let ans = xyzThere("abcxyz");
console.log(ans);
