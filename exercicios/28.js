let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function vetorPares(vetorNumero) {
    let numPares = 0
    let numImpares = 0
    for (let i = 0; i < vetorNumero.length; i++) {
        if (vetorNumero[i] % 2 == 0) {
            numPares++
        } else {
            numImpares++
        }
    }
    console.log(`Quantidade de pares ${numPares}. Quantidade de impares ${numImpares}. `)
}

vetorPares(vetor)

