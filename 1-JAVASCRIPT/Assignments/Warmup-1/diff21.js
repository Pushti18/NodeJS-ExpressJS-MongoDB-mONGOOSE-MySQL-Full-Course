function diff21(n) {
  if (n < 21) {
    return 21 - n;
  } else {
    return (n - 21) * 2;
  }
}

let ans = diff21(19);
console.log(ans);
