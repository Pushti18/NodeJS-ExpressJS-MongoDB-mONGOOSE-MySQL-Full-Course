function endOther(a, b) {
  let a1 = a.toLowerCase();
  //   let a1=a;
  //   let b1=b;
  let b1 = b.toLowerCase();
  if (a.length < b.length)
    //     a=b.toLowerCase();
    //     b=a1.toLowerCase();
    return b.toLowerCase().substring(b.length - a.length) == a1;
  else return a.toLowerCase().substring(a.length - b.length) == b1;
}
let ans = endOther("Hiabc", "abc");
console.log(ans);
