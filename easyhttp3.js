class easyHttp3{
    async get(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        return response;

        console.log(response);

        const res = await response.json();
    }
}