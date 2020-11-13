
document.addEventListener('DOMContentLoaded',()=>{
    let quadrados = document.querySelectorAll(".quadrado");

    quadrados.forEach((quadrado)=>{
        quadrado.addEventListener('click', handleClick);
    })
})

function handleClick(event){

    let quadrado = event.target;
    let position = quadrado.id;
    
    handleMove(position);
    updateQuadrados();
}

function updateQuadrados(){
    let quadrados = document.querySelectorAll(".quadrado");

    quadrados.forEach((quadrado)=>{
        let position = quadrado.id;
        let simbolos = tabuleiro[position];

        if(simbolos != ""){
            quadrado.innerHTML = `<div class='${simbolos}'></div>`
        }
    })
}