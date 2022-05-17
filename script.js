const q = document.querySelector('#q');
const botao = document.querySelector('.botao');
const form = document.querySelector('form'); 
const generos = document.querySelector('#genero');
const modal = document.querySelector('modal');

generos.addEventListener('change', function (event) {
    
    q.value = event.target.value ? event.target.value : q.value;
   
});

form.addEventListener('submit', (event)=>{
    
    if(q.value ===""){
        event.preventDefault();
        modal.classList.remove('escondido');
        return;
    } else if (modal.classList ==='escondido'){
        modal.classList.add('escondido');
    }
    
});










