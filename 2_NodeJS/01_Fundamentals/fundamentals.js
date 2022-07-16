// // Export import variables
// // const variable123 = require("./export-variables");
// const exportedVariables = require("./export-variables");
// console.log("Exported function from other file : ", exportedVariables.sumXY());
// console.log("x : ", exportedVariables.x);
// console.log("y : ", exportedVariables.y);
// // Core Modules

// // Global Core Modules
// console.log("\nCurrent Directory: ", __dirname);
// console.log("Current File Location: ", __filename);

// //Non Global Core Modules
// const fsVariable = require("fs");
// // fsVariable.writeFileSync(name, content);
// // const { resolve } = require("path");
// fsVariable.writeFileSync(
//   "Non-Global.txt",
//   "Example of Non-Global Core Module...!"
// );
// console.log("\nNon-Global Core Module txt written.");

// Asynchronous Concept of NodeJS

// Scenario-1 synchronous/asynchronous
// console.log("Start...");
// console.log("Process...");
// console.log("Stop...\n");

// // Scenario-2 asynchronous/non-blocking
// console.log("Start..."); //start, process, stop->synchronous
// // // start,stop,process->asynchronous

// let a = 20;
// let b = 0;
// setTimeout(() => {
//   b = 30;
//   console.log("Process...\n");
// }, 2000);
// console.log(a + b); //start,20,stop,process

// console.log("Stop...");

// // Scenario-3 single-threaded/ asynchronous/non-blocking7

// console.log("Start...");

// for (let i = 0; i < 10000; i++) {
//   for (let j = 0; j < 10000; j++) {
//     //Processing
//   }
//   if (i == 9999) console.log("Process");
// }

// console.log("Stop...");

// Solution to Disadvantages of Asynchronous flow
console.log("Start...");

let x = 20;
let y = 10;

let updateWaitData = new Promise((resolved, reject) => {
  setTimeout(() => {
    y = 30;
    // console.log("Process...\n");
    if (y == 30) resolved("ok");
    else reject("Error");
  }, 2000);
});

updateWaitData.then(
  function (value) {
    console.log(x + y);
  },
  function (Error) {
    console.log("error");
  }
);

console.log("Stop...");

// How NodeJS works

/*
Event Loop:
1. Call Stack
2. Node API
3. Callback Queue
*/

// Without Node API and Callback Queue
// let p = 1;
// let q = 2;
// console.log("Start...");
// console.log("Process...");
// console.log("Stop...");

// // With Node API and Callback Queue (Due to C, C++)
// console.log("Start...");

// setTimeout(() => {
//   console.log("Wait for 2 Seconds...");
// }, 2000);

// setTimeout(() => {
//   console.log("Wait for 0 Second...");
// }, 0);

// console.log("Stop...");
