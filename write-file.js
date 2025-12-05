const fs = require("fs")

const content1 = " This is a content  \n Node.js is awsome!"

try {
    fs.writeFileSync('./output/write-sync.txt', content1)
    console.log("File written sync");
} catch (error) {
    console.err(error.message);
}


const content2 = " This is content Too \n File Write asynchronously"

fs.writeFile("./output/write-async.txt", content2, error => {
    if(error) {
        console.error(error.message);
    } else {
        console.log("File Written Asynchronously ");
    }
})