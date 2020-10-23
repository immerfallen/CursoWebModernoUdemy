function maiorEMenor(vetor) {
    let maiorNumero
    let menorNumero
    for (let i = 0; i <= vetor.length; i++) {
        if (maiorNumero == undefined && menorNumero == undefined) {
            maiorNumero = vetor[i]
            menorNumero = vetor[i]
        } else {

            if (vetor[i] > maiorNumero) {
                maiorNumero = vetor[i]
            }

            if (vetor[i] < menorNumero) {
                menorNumero = vetor[i]
            }
        }
    }

    console.log(`Maior numero ${maiorNumero}, menor número ${menorNumero}`)
}

vetorNum = [2, 3, 5, 89, 3, 4, 6, 3]
maiorEMenor(vetorNum)
