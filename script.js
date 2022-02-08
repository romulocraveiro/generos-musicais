const q = document.querySelector('#q');
const generos = document.querySelector('#genero');

generos.addEventListener('change', function (event) {
    console.log(event.target.value);
    q.value = event.target.value ? event.target.value : q.value;
}); // Leitura da lógica: o input oculto com id 'q' tem valor igual ao input explícito (de id 'genero')? Se sim, considere o value apresentado e faça a pesquisa, abrindo seu resultado em outra janela. Se não, considere o value vazio. Nesse caso, q sem valor (= "", ou seja, string vazio) significa que o Google não fará a pesquisa.


// const form = documento.querySelector('form');
//     form.preventDefault();
