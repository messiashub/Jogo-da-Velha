
document.addEventListener('DOMContentLoaded', () => {
    let quadrados = document.querySelectorAll(".quadrado");

    quadrados.forEach((quadrado) => {
        quadrado.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let quadrado = event.target;
    let position = quadrado.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert(`O jogo acabou - O vencedor foi ${playerTime}`);
        }, 100);

    };
    updateQuadrados(position);
}

function updateQuadrados(position){
    let quadrado = document.getElementById(position.toString());
    let simbolos = tabuleiro[position];
    quadrado.innerHTML = `<div class='${simbolos}'></div>`
}

