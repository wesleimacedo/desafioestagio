function pertenceSequenciaFibonacci(numero) {
    let primeiro = 0;
    let segundo = 1;

    while (segundo <= numero) {
        if (segundo === numero) {
            return true; 
        }
        let proximo = primeiro + segundo;
        primeiro = segundo;
        segundo = proximo;
    }

    return false; 
}

const numeroInformado = 34; //pode alterar o num pra ver se pertence ou não a sequencia

if (pertenceSequenciaFibonacci(numeroInformado)) {
    console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}
