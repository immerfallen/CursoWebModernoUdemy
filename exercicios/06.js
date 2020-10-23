function jurosSimples(capitalInicial, taxaDeJuros, tempo) {
    return capitalInicial * (1 + taxaDeJuros / 100 * tempo)
}

function jurosComposto(capitalInicial, taxaDeJuros, tempo) {
    return (capitalInicial * Math.pow(1 + taxaDeJuros / 100, tempo)).toFixed(2)
}

console.log(jurosSimples(1000, 1, 2))

console.log(jurosComposto(1400, 7, 2))