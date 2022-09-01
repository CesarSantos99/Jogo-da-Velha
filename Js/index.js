const celulas = document.querySelectorAll(".celula");
let checarTurno = true;
const jogador_x = "x";
const jogador_o = "O";

document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")){
        jogar(event.target.id);
    }
});

function jogar(id){
    const celula = document.getElementById(id);
    turno = checarTurno ? jogador_x : jogador_o;
    celula.textContent = turno;
    checarTurno = !checarTurno;
    checarVencedor(turno);
};

function checarVencedor(turno) {

}