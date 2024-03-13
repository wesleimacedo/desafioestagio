function inverterString(entrada) {
    let novaString = '';
    for (let i = entrada.length - 1; i >= 0; i--) {
        novaString += entrada[i];
    }
    return novaString;
}

const minhaString = "Hello, world";
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida); 
