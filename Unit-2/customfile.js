const { isUtf8 } = require("buffer");
const fs=require("fs");


function readFile(filename,callback){
    fs.readFile(filename,'utf8',(err,data)=>{
        if(err){
            callback(err,null);
        }
        else
            callback(null,data);

    });
}

function writeFile(fileName,content,callback){
    fs.writeFile(fileName,content,(err)=>{
        if(err)
            callback(err);
        else{
            callback(null);
        }
    }
    )
}
module.exports={
    writeFile,
    readFile
}