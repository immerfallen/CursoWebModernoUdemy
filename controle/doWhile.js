function pegarNumeroEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
opcao = pegarNumeroEntre(-1,10)
console.log(`A opcao escolhida foi ${opcao}`)
} while (opcao!=-1)
