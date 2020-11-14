// iniciar minhas variáveis

let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let simbolos = ['o', 'x'];
let gameOver = false;
let posicaoVitoria = [
    [0, 1, 2],    // Posição horizontal
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],   // Posição vertical
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],   // Posição transversal
    [2, 4, 6],

]

function handleMove(position) {
    if (gameOver) {
        return;
    }

    if (tabuleiro[position] == '') {
        tabuleiro[position] = simbolos[playerTime];

        gameOver = vencedor();

        if (gameOver == false) {
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    }
    return gameOver;
}

function vencedor() {
   
    for (let i = 0; i < posicaoVitoria.length; i++) {
        let seq = posicaoVitoria[i];

        let posicao1 = seq[0];
        let posicao2 = seq[1];
        let posicao3 = seq[2];

        if (tabuleiro[posicao1] == tabuleiro[posicao2] &&
            tabuleiro[posicao1] == tabuleiro[posicao3] &&
            tabuleiro[posicao1] != '') {

            return true;
        }
    }
    return false;
}


