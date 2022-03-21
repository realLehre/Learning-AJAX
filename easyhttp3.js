class easyHttp3{
    async get(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const res = await response.json();

        return res;
    }
}

const http = new easyHttp3();

http.get()