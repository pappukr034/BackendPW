
const fs=require("fs");

// console.log("Before data reading")

// console.log("Asynchronouse way to read file")
// const readData=fs.readFile("input.txt",(err,data)=>{
//      if(err){
//         console.log("There is error during file reading",err);
//      }
//      console.log("Read data : ",data.toString());
//      return data.toString();
// })

// console.log("After data reading")

// // synchronouse way to read file
// console.log("synchronouse way to read file")
// const readFile=fs.readFileSync("input.txt")

// console.log(readFile.toString())




// file read -> open+read
// const buf=new Buffer(1024)

//  fs.open("input.txt","r+",(err,fd)=>{
//      if(err){
//         console.log("Error in file reading",err);
//      }
//      console.log("file open sucsesfully")

//      fs.read(fd,buf,0,buf.length,0,(err,bytes)=>{
//          if(err){
//             console.log("error in file reading",err)
//          }
//          console.log(bytes)
//          console.log(buf.slice(0,bytes).toString())
//      })

//      fs.close(fd,(err)=>{
//         if(err) console.log("Error in file closing")
//             else console.log("Succsess in Closing file")
//      })
//  })



// Write file

// fs.writeFile('input.txt',"Registration no. : 2113847",(err)=>{
//        if(err){
//          console.log("Error during writing file")
//        }
//        else{
//          console.log("Wrting file is successfully")
//        }
// })



// appending to file

// fs.appendFile("input.txt","Registartion no. : 2113847","utf-8",(err)=>{
//     if(err){
//         console.log("Error in file appending")
//     }
//     else{
//         console.log("Data appended succesfully")
//     }
// })

// deleting file 

fs.unlink('fileToBeDeleted.txt',(err)=>{
    if(err){
        console.log("Error in deleting")
    }
    else console.log("Succsess in deleting file")
})

