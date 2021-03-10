let canvas = document.getElementById("cobra");
let context = canvas.getContext("2d");
let box = 32;
let cobra = [];
cobra[0] = {
    x = 8 * box,
    y = 8 * box
}
let direction = "right";

function criarBOX() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobra() {
    for(i=0; i < cobra.length; i++){
        context.fillStyle = "green";
        context.fillRect(cobra[i].x, cobra[i].y, box, box);
    }
}

function inicioGame() {
    criarBOX();
    criarCobra();

    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if(direction == "right") cobraX += box;
    if(direction == "left") cobraX -= box;
    if(direction == "up") cobraY -= box;
    if(direction == "down") cobraY += box;

    cobra.pop();
    
    let novaHead = {
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(novaHead);
}

let game = setInterval(inicioGame, 100);
