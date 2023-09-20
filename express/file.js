// read files

const fs = require("fs");

// non blocking
console.log("before")
fs.readFile("./sampleFile.txt" ,"utf-8" ,(err,data)=>{
    console.log("ASYNC")
})
// ASYNC OPRATION

console.log("after")


console.log("before2")

let data = fs.readFileSync("./sampleFile2.txt" ,"utf-8")
console.log("SYNC")
console.log("after2")


// before
// after
// before2
// inside sample file data
// after2
// inside sample file     