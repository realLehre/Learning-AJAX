class Connect{
    get(url){
       return new Promise((resolve, reject) => {
           fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
       })
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => err)
    }
}