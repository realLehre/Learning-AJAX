const form = document.getElementById('form');


form.addEventListener('submit', fire)

function fire(e){
    const value = document.getElementById('input').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'random.json', true);

    xhr.onload = function(){
        if(this.response === 200){
            console.log(this.response);
        }
    }

    xhr.send();

    e.preventDefault();
}