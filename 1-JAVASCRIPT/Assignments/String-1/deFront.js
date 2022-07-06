function deFront(str) {
  if (str.charAt(0) == "a" && str.charAt(1) != "b")
    return str.charAt(0) + str.substring(2);
  else if (str.charAt(0) != "a" && str.charAt(1) == "b")
    return str.substring(1);
  else if (str.charAt(0) == "a" && str.charAt(1) == "b") return str;
  else return str.substring(2);
}
let ans = deFront("Hello");
console.log(ans);
