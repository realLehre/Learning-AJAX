class easyHttp3{
    async get(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        console.log(response);

        const res = await response.json();
    }
}

const http = new easyHttp3();

http.get()