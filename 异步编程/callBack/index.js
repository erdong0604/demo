const fs = require('fs');

function readFile(file,cb){
    fs.readFile(file,'utf8',function(err,data){
        if(err){
            console.log(err);
            return;
        };
        cb&&cb(data);
    })
}

readFile('a.text',function(res1){
    console.log(res1);
    readFile(res1,function(res2){
        console.log(res2);
        readFile(res2,function(res3){
            console.log(res3);
        })
    })
})