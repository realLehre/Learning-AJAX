class easyHttp {
    get(url){
        return new Promise(() => {
            
        })
        fetch(url)
            .then(res => res.json())
            .then(data => data)
            .catch(err => err);
    }
}