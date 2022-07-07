function fizzString(str) {
  if (str.charAt(0) == "f" && str.charAt(str.length - 1) == "b")
    return "FizzBuzz";
  else if (str.charAt(str.length - 1) == "b") return "Buzz";
  else if (str.charAt(0) == "f") return "Fizz";
  else return str;
}
let ans = fizzString("fig");
console.log(ans);
