function countCode(str) {
  let a = 0;
  for (let i = 0; i < str.length - 3; i++)
    if (str.substring(i, i + 2) == "co" && str.charAt(i + 3) == "e") a++;
  //else
  //  return str.split('code').length-1;
  return a;
}
let ans = countCode("aaacodebbb");
console.log(ans);
