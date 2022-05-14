const q = document.querySelector('#q');
const generos = document.querySelector('#genero');

generos.addEventListener('change', function (event) {
    q.value = event.target.value ? event.target.value : q.value;

}); 










