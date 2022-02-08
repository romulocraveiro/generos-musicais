const q = document.querySelector('#q');
const generos = document.querySelector('#genero');

generos.addEventListener('change', function (event) {
    console.log(event.target.value);
    q.value = event.target.value ? event.target.value : q.value;
}); 

// >>>>>>>>>>>>>>Outra forma de resolver:<<<<<<<<<<<<<<<<

// const form = document.querySelector('form');
// const q = document.querySelector('#q');
// form.preventDefault('change', function (event) {
//     console.log(event.target.value);
//     q.value = event.target.value ? event.target.value : q.value;
// });




