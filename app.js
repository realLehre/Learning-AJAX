const form = document.getElementById('form');


form.addEventListener('submit', fire)

function fire(e){
    const input = document.getElementById('input').value;
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'random.json', true)

    xhr.onload = function(){
        if(this.status === 200){
           let jokes = JSON.parse(this.responseText);
        }

        const output = `<div class="joke">
        <div class="index">1</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sunt
        architecto placeat praesentium explicabo cumque facere cum eum aliquam
        repellendus.
      </div>`
    
    }

    xhr.send();

    e.preventDefault();
}