function easyHttp(){
    this.http = new XMLHttpRequest();
}

easyHttp.prototype.get = function(url, callback){
    this.http.open('GET', url, true);

    // const self = this;

    this.http.onload = function(){
        if(this.status === 200){
            callback(this.responseText);      
        }     
    }

    this.http.send();
}