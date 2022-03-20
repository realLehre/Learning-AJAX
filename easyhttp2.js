class Connect{
    get(){
        fetch(url)
            .then(res => res.json())
            .then(data => data)
            .catch(err => err)
    }
}