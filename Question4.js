let interruptor1 = false; 
let interruptor2 = false; 
let interruptor3 = false; 

interruptor1 = true;

interruptor1 = false;
interruptor2 = true;

let lâmpadaLigada;
if (interruptor2) {
    lâmpadaLigada = 2;
} else if (interruptor1) {
    lâmpadaLigada = 1;
} else {
    lâmpadaLigada = 3;
}

console.log("A lâmpada ligada está conectada ao interruptor " + lâmpadaLigada);
