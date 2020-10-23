function media(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i]
    }
    console.log(soma)
}

let vetor = [1, 2, 3, 4, 5, 6, 7]

media(vetor)