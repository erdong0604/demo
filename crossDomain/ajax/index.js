const ajax = (options) => {
    return new Promise((resolve,reject) => {
        const { url,methods } = options;
        let xhr = new XMLHttpRequest();
        xhr.open(methods,url,true);
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4&&xhr.status <= 200){
                resolve(xhr.responseText);
            }else if(xhr.status >= 404){
                reject(xhr)
            }
            
        }
        xhr.send();
    })
    
}

export default ajax;