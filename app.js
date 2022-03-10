const form = document.getElementById('form');


form.addEventListener('submit', fire)

function fire(e){
    const value = document.getElementById('input').value;

    const xhr = new XMLHttpRequest();

    

    xhr.send();
}