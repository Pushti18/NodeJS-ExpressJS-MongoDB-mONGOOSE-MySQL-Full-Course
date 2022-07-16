const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "Files");
const filePath = `${dirPath}`;
const readline = require("readline-sync");
console.log("Changes to be made:");
console.log(
  "1. New File to be added\n2. Write in file\n3. Update the file\n4. Rename the file\n5. Delete the file\n6. Read the file\n7. View All Files"
);
const b = Number(
  readline.question("Enter no in which changes is to be made : ")
);

switch (b) {
  case 1:
    const fileName = String(
      readline.question("Enter file name that is to be created : ")
    );
    fs.writeFile(fileName, "w+", function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
    });
    break;
  case 2:
    const file1 = String(
      readline.question("Enter file name that is to be written : ")
    );
    const c = String(readline.question("Enter text for file: "));

    fs.writeFile(`${file1}`, c, function (err) {
      if (err) throw err;
      console.log("File is written successfully.");
    });
    break;
  case 3:
    const file2 = String(
      readline.question("Enter file name that is to be updated : ")
    );
    const i = "\n" + String(readline.question("Enter text for file : "));

    fs.appendFile(
      `${file2}`,
      i,
      "utf8",
      // callback function
      function (err) {
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.");
      }
    );
    break;
  case 4:
    const file3 = String(
      readline.question("Enter file name that is to be renamed : ")
    );
    const fileNew = String(readline.question("Enter new file name : "));

    fs.rename(`${file3}`, `${fileNew}`, (err) => {
      if (err) {
        console.log("Error renaming file...");
        return;
      } else console.log("File is renamed...");
    });
    break;
  case 5:
    const file4 = String(
      readline.question("Enter file name that is to be deleted : ")
    );

    fs.unlinkSync(`${file4}`);
    break;
  case 6:
    const file5 = String(
      readline.question("Enter file name that is to be read : ")
    );

    fs.readFile(`${file5}`, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
    break;
  case 7:
    fs.readdir("./", (err, files) => {
      files.forEach((file) => {
        console.log(file);
      });
    });
    break;
}
