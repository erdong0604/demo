const fs = require('fs');

function readFile(file){
    return new Promise((resolve,reject) => {
        fs.readFile(file,'utf8',function(err,data){
            if(err) reject(err);
            resolve(data);
        })
    })
}

readFile('a.text')
.then(res1 => {
    console.log(res1);
    readFile(res1).then(res2 => {
        console.log(res2);
        readFile(res2).then(res3 =>{
            console.log(res3);
        })
    })
})
