const q = document.querySelector('#q');
const form = document.querySelector('form'); 
const generos = document.querySelector('#genero');
const modal = document.querySelector('modal');

generos.addEventListener('change', event => {
    q.value = event.target.value;
});

form.addEventListener('submit', (event)=>{
    
    if(!q.value){
        event.preventDefault();
        modal.classList.remove('escondido');
        
    } else {
        modal.classList.add('escondido'); 
    } 

});










