function triangle(rows) {
  if (rows == 0) return 0;
  return rows + triangle(rows - 1);
}
let ans = triangle(4);
console.log(ans);
