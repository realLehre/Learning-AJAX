const form = document.getElementById('form');
const input = document.getElementById('input').value;

form.addEventListener('submit', fire)

function fire(e){
    console.log(input);

    e.preventDefault();
}