let canvas = document.getElementById("cobra");
let context = canvas.getContext("2d");
let box = 32;
let cobra = [];
cobra[0] = {
    x = 8 * box,
    y = 8 * box
}

function criarBOX() {
    context.fillStyle = "black";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobra() {
    for(i=0; i < cobra.length; i++){
        context.fillStyle = "pink";
        context.fillRect(cobra[i].x, cobra[i].y, box, box);
    }
}

criarBOX();
criarCobra();