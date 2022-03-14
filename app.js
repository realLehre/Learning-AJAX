// const form = document.getElementById('form');


// form.addEventListener('submit', fire)

// function fire(e){
//     let input = document.getElementById('input');
//     value = input.value;

//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', `http://api.icndb.com/jokes/random/${value}`, true);

//     xhr.onprogress = function(){
//         console.log('progress...');
//     }

//     xhr.onload = function(){
//         if(this.status === 200){
//             const text = JSON.parse(this.responseText);

//             ui = "";

//             text.value.forEach(function(joke, index){
//                 ui += `<div class="joke">
//                         <div class="index">${index + 1}</div>
//                         ${joke.joke}
//                         </div>`
//             })
            
//             document.querySelector('.jokes').innerHTML = ui;
//         }
//     }

//     xhr.onreadystatechange = function(){
//         if(this.status === 200 && this.readyState === 4){
//             const text = JSON.parse(this.responseText);

//             ui = "";

//             text.value.forEach(function(joke, index){
//                 ui += `<div class="joke">
//                         <div class="index">${index + 1}</div>
//                         ${joke.joke}
//                         </div>`
//             })
            
//             document.querySelector('.jokes').innerHTML = ui;
//         }
//     }

//     xhr.send();

//     e.preventDefault();
// }

// const users = [
//     {
//         id: 1,
//         name: 'Mike Smith',
//         position: 'General manager'
//     },
//     {
//         id: 2,
//         name: 'Johanne Jane',
//         position: 'Sales manager'
//     },
//     {
//         id: 3,
//         name: 'Joe Kane',
//         position: 'Logistics expert'
//     }
// ]

// function createUser(user, cb) {
//     setTimeout(function(){
//         users.push(user);
//         cb();
//     }, 1500) 
// }

// function getUser() {
//     setTimeout(function(){
//         let output = '';

//         users.forEach(function(user){
//             output += `<li>Name: ${user.name}, Postion: ${user.position}</li>`
//         })

//         document.body.innerHTML = output;
//     }, 1000)
// }

// createUser({id: 4, name: 'Christine Kate', position: 'Human resources'}, getUser);
// createUser({id: 5, name: 'Alex Chambers', position: 'Chief Security Officer'}, getUser);

// getUser();

const http = new easyHttp();

http.get('https://jsonplaceholder.typicode.com/posts1');