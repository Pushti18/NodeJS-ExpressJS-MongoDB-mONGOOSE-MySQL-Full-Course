function catDog(str) {
  //   let count=0;
  //   return str.count('dog',str)==count('cat',str);
  let cat = 0;
  let dog = 0;
  for (let i = 0; i < str.length - 2; i++)
    if (str.substring(i, i + 3) == "cat") cat++;
    else if (str.substring(i, i + 3) == "dog") dog++;

  return cat == dog;

  //   if(cat==dog )
  //     return true;

  //   return false;
}
let ans = catDog("catdog");
console.log(ans);
