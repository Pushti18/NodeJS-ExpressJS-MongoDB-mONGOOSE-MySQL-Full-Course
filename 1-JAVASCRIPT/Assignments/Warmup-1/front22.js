function front22(str) {
  return (
    str.substring(0, 2) + str.slice(0, str.length - 0) + str.substring(0, 2)
  );
}
let ans = front22("ict");
console.log(ans);
