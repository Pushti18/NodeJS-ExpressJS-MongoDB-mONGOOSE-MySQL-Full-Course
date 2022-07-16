let x, y, z; // Variable declaration
var p;
const abc = "abc";
x = 9; // Variable assignment
y = 4;
z = x + y; // Arithmatic operation
console.log("x:", x, "y:", y, "z:", z); // Printing in terminal

let w = 3;
let v = 9;
console.log("w+v", w + v); //addition
console.log("v-w", v - w); //sub
console.log("v*w", v * w); //multiply
console.log("v**w", v ** w); //expo
console.log("v/w", v / w); //division
console.log("v%w", v % w); //mod
console.log("++v", ++v); //increment
console.log("--w", --w); //decrement

//difference between == and ===
let a = 5;
let b = 5;
console.log("\na==b : ", a == b); // compares just value
console.log("a===b : ", a === b); // compares values and type

let d = 5;
let c = "5";
console.log("\nd==c : ", d == c); // compares just value
console.log("d===c : ", d === c); // compares values and type

// array fundamentals
let arr = [0, 1, 2, 3, 5, 4];
console.log("sorted array:", arr.sort());
console.log("length of array:", arr.length);
console.log("reverse array:", arr.reverse);
// console.log(arr);

// console.log("reduce array", arr.reduce());
const result = arr.filter((item) => {
  return item >= 4;
});

console.warn("\nFiltered value from array : ", result);

//string methods
let strl = "hello everyone";
console.log("String:", strl.length);

//slice(startIndex,endIndex)
console.log("Slice:", strl.slice(6, 9));
console.log("Slice:", strl.slice(-8, -2));

//subsring(startIndex,endIndex)
console.log("Subsring:", strl.substring(6, 9));
console.log("Subsring:", strl.substring(-2, 4));

//substr(startIndex,count)
console.log("Substr:", strl.substr(6, 2)); //need to write the starting string and till how many string we want

console.log(strl.indexOf("o"));

//functions
let ans = mult(2, 3);
function mult(a, b) {
  if (a > 2) {
    console.log(a);
  } else if (a < 5) {
    console.log("a less than 5");
  } else {
    console.log("else condition");
  }

  switch (a) {
    case 1:
      console.log("1");

      break;
    case 2:
      console.log("2");
      break;

    default:
      console.log(a);
      break;
  }
  return a * b;

  //   console.log("answer:", a * b);
}

console.log("ans:", ans);
