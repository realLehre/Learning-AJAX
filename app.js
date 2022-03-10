const form = document.getElementById('form');


form.addEventListener('submit', fire)

function fire(e){
    let input = document.getElementById('input');
    value = input.value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${value}`, true);

    // xhr.onload = function(){
    //     if(this.status === 200){
    //         const text = JSON.parse(this.responseText);

    //         ui = "";

    //         text.value.forEach(function(joke, index){
    //             ui += `<div class="joke">
    //                     <div class="index">${index + 1}</div>
    //                     ${joke.joke}
    //                     </div>`
    //         })
            
    //         document.querySelector('.jokes').innerHTML = ui;
    //     }
    // }

    xhr.onreadystatechange = function(){
        
    }

    xhr.send();

    value = "";
    e.preventDefault();
}