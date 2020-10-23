let vetor = [1, 2, 3, 4, 5, 15, 16, 17, 18, 19, 56, 87]

function contaIntervalo(vetorIntervalo) {
    let contIntervalo = 0
    let contForaIntervalo = 0
    for (let i = 0; i <= vetorIntervalo.length; i++) {
        if (vetorIntervalo[i] >= 10 && vetorIntervalo[i] <= 20) {
            contIntervalo++
        } else {
            contForaIntervalo++
        }
    }
    console.log(`Valores dentro do intervalo ${contIntervalo}, valores fora do intervalo ${contForaIntervalo}.`)
}

contaIntervalo(vetor)
