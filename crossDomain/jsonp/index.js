const jsonp = (options) => {
    return new Promise((resolve,reject) => {
        const { url,params,cb } = options;
        let script = document.createElement('script');
        window[cb] = (data) => {
            resolve(data);
            document.body.removeChild(script);
        }
        let paramsMap = { ...params,cb };
        let paramStr = Object.keys(paramsMap).reduce((str,key) => {
            return `${str}${str?'&':''}${key}=${paramsMap[key]}`
        },'');
        script.src = `${url}?${paramStr}`;
        script.onerror = (err) => {
            reject(err);
        }
        document.body.append(script);
    })
    

}

export default jsonp;