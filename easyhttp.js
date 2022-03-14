function easyHttp(){
    this.http = new XMLHttpRequest();
}

easyHttp.prototype.get = function(url, callback){
    this.http.open('GET', url, true);

    // const self = this;

    this.http.onload = function(){
        if(this.status === 200){
            callback(null, this.responseText);      
        } else {
            callback('Error :' + this.status)
        }      
    }

    this.http.send();
}