function easyHttp(){
    this.http = new XMLHttpRequest();
}

easyHttp.prototype.get = function(url){
    this.http.open('GET', url, true);

    const self = this;
    this.http.onload = function(){
        if(self.status === 200){
            console.log(self.responseText);      
        }     
    }
    this.http.send();
}