// var fs = require("fs");
//function without sync
// fs.readFile("test.txt", function (err, response) {
//   console.log("here");
//   console.log(response.toString());
//   //   if (err) throw err;
//   console.log("Saved!");
// });

//function with sync
// let filedata = fs.readFile("test.txt", function (err, response));
// console.log(response.toString());

//async await concept
function function2() {
  setTimeout(() => {
    console.log("hi");
  }, 2000);
}

let setTime = new Date().getTime();
function2;
console.log("endline", (new Date().getTime() - startTime) / 1000);
