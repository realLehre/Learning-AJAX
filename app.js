const form = document.getElementById('form');


form.addEventListener('submit', fire)

function fire(e){
    const value = document.getElementById('input').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'random.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const text = JSON.parse(this.responseText);

            let ui = '';
            
            text.forEach(function(joke, index){
                ui += `<div class="joke">
                        <div class="index">${index}</div>
                        ${joke}
                        </div> `
                        console.log(joke);
            })
        }
    }

    xhr.send();

    e.preventDefault();
}