function easyHttp(){
    this.http = new XMLHttpRequest();
}

easyHttp.prototype.get = function(url){
    this.http.open('GET', url, true);

    this.http.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        
    }

    this.http.send();
}
}