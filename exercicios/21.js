function calcularValorPlanoDeSaude(idade) {
    let valorPlanoInicial = 100
    let valorPlanoAtualizado = 0
    if (idade < 10) {
        valorPlanoAtualizado = valorPlanoInicial + 80
    } else if (idade < 30){
        valorPlanoAtualizado = valorPlanoInicial + 50
    } else if (idade < 60){
        valorPlanoAtualizado = valorPlanoInicial + 95
    }
    else {
        valorPlanoAtualizado = valorPlanoInicial + 130
    }
    return valorPlanoAtualizado
}
console.log(calcularValorPlanoDeSaude(5))
console.log(calcularValorPlanoDeSaude(15))
console.log(calcularValorPlanoDeSaude(45))
console.log(calcularValorPlanoDeSaude(72))
