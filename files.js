const fs = require("fs");

// const quote = "No beauty shines brighter than that of a good heart 😊 !!!.";

// // ex1:
// fs.writeFile("./awesome.html", quote, (err) => {
//     console.log("Completed writing!!!");
// });

// const quote2 = "Live more, worry less 😄😊";

// ex2:
// for(let i = 1; i <= 10; i++){
//     const filename = `./backup/text-${i}.html`;

// fs.writeFile(filename, quote2, (err) => {
//     console.log(`text-${i}.html created successfully`);
// })
// }

// const quote3 = "Live more, worry less 😄😊";

// // ex3:
// const [, , num] = process.argv;
// for(let i = 1; i <= num; i++){
//     const filename = `./backup2/text-${i}.html`;

// fs.writeFile(filename, quote3, (err) => {
//     console.log(`text-${i}.html created successfully`);
// })
// }

// ex4:

// fs.readFile("./msg1.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("❌", err);
//   } else {
//     console.log(data);
//   }
// });


// ex5:
// const quote4 = "Dream without fear,  love without limits 🧡"

// fs.appendFile("./fun.html", "\n" + quote4, (err) => {
//     console.log("Completed updating!!!");
// });

// ex6: 
fs.unlink("./delete-me.css", (err) => {
    console.log("Completed deleting!!!");
});