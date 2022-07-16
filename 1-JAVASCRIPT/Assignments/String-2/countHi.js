function countHi(str) {
  let a = 0;
  for (let i = 0; i < str.length; i++)
    //     return b=str.substring(i,i+2)
    if (str.substring(i, i + 2) == "hi") a++;
  return a;
}
let ans = countHi("the hi");
console.log(ans);
