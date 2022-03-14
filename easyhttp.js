function easyHttp(){
    this.http = new XMLHttpRequest();
}

easyHttp.prototype.get = function(url, callback){
    this.http.open('GET', url, true);

    this.http.onload = function(){
        if(this.status === 200){
            callbackthis.responseText);      
        }     
    }
    this.http.send();
}