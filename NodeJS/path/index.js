const path=require("path");
console.log(path)

const currentFilePath=__filename;
console.log("Current file path:- ",currentFilePath)


let base=path.basename(currentFilePath)
console.log("basename:- ",base);

console.log("file name:- ",path.basename(currentFilePath,".js"));
console.log("file name extension:- ",path.extname(currentFilePath));

let currentDirectry=path.dirname(currentFilePath)
console.log("current directry:- ",currentDirectry);


const combinedPath=path.format({
    dir:currentDirectry,
    base:base
})

console.log("combinedPath",combinedPath)

console.log(path.parse(currentFilePath))