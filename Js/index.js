const celulas = document.querySelectorAll(".jogo");
let checarTurno = true;
const jogador_x = "x";
const jogador_o = "O";

document.addEventListener("click", (event) => {
    if(event.target.matches(".jogo")){
        jogar(event.target.id);
    }
});

function jogar(){
    const jogo = document.getElementById(id);
    turno = checarTurno ? jogador_x : jogador_o;
    jogo.textContent = turno;
};