//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function limparCampo() {
    let addAmigo = document.querySelector('input');
    addAmigo.value = '';
}

function adicionarAmigo() {
    let addAmigo = document.querySelector('input').value;
    if (addAmigo == '') {
        alert('Por favor, insira um nome.');
        return;
    }

    listaDeAmigos.push(addAmigo);
    limparCampo();
    console.log(listaDeAmigos);
}

