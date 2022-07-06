function makeAbba(a, b) {
  return (b, a) + (a, b) + (a, b) + (b, a);
}
let ans = makeAbba("kitten", "ict");
console.log(ans);
