const fs = require("fs")
const os = require("os");

console.log(os.cpus().length);


// Sync...  (BLOCKING REQUEST)
// fs.writeFileSync("./test.txt", "Hello World!");

// Async...  (NON-BLOCKING REQUEST)
// fs.writeFile("./test.txt", "Hello World Async!", (err) => {});

// const result = fs.readFileSync('./contacts.txt', "utf-8")             (BLOCKING REQUEST)
// console.log(result);

// fs.readFile('./contacts.txt', "utf-8", (err, result) => {             (NON-BLOCKING REQUEST)
//     if (err) {
//         console.log("ERROR", err);
//     } else{
//         console.log(result);
//     }
// })

fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString());

// fs.cpSync("./test.txt", "./copy.txt")

fs.unlinkSync("./copy.txt")