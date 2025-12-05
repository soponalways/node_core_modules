const fs = require("fs")

// fs.writeFileSync("./output/app.log", "Application Started \n")
// console.log("File Created");

const log1  = `${new Date().toISOString()} user logedin \n`

fs.appendFileSync("./output/app.log" , log1 )
console.log("File Appended 1");


const log2 = `${new Date().toISOString()} user data fecthed \n`

fs.appendFileSync("./output/app.log", log2)
console.log("File Appended 2");