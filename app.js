//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(nome)) {
        alert("Digite um nome válido.");
        return;
    }
    
    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    
    listaDeAmigos.push(nome);
    atualizarLista();
    input.value = "";
    
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaDeAmigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        li.style.color = gerarCorAleatoria();
        lista.appendChild(li);
    });
}

function gerarCorAleatoria() {
    let letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}



function sortearAmigo() {
    
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado =  listaDeAmigos.splice(indiceSorteado, 1)[0];
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
    atualizarLista();
}

