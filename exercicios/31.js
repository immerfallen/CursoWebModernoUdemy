function negativos(vetor) {
    let contNegativos = 0
    for (let i = 0; i <= vetor.length; i++) {
        if (vetor[i] < 0) {
            contNegativos++
        }
    }
    console.log(`Negativos ${contNegativos}`)
}

vetorNum = [1, 0, 5, 2, 3, 9, 6, 3]
negativos(vetorNum)