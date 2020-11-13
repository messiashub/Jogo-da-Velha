// iniciar minhas variáveis

let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let simbolos = ['o', 'x'];

function handleMove(position) {

    if (tabuleiro[position] == '') {
        tabuleiro[position] = simbolos[playerTime];

        if (playerTime == 0) {
            playerTime = 1;
        } else {
            playerTime = 0;
        }
    }


}