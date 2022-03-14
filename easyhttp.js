function easyHttp(){
    this.http = new XMLHttpRequest();
}

easyHttp.prototype.get = function(url){
    this.http.open('GET', url, true);

    this.http.send();
}