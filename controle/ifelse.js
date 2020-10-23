const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    } else {
        console.log('Reprovado. Vai estudar vagabundo')
    }
}

imprimirResultado(5)
imprimirResultado(8)
imprimirResultado('Epa') // cuidado


