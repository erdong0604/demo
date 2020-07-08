const fs = require('fs');

function readFile(file){
    return new Promise((resolve,reject) => {
        fs.readFile(file,'utf8',function(err,data){
            if(err) reject(err);
            resolve(data);
        })
    })
}

function* read(name){
    let file1 = yield readFile(name);
    let file2 = yield readFile(file1);
    let file3 = yield readFile(file2);
    return file3;
}

let r = read('a.text');

r.next().value.then(res1 => {
    console.log(res1);
    r.next(res1).value.then(res2 => {
        console.log(res2);
        r.next(res2).value.then(res3 => {
            console.log(res3);
            console.log(r.next(res3))
        })
    })
})