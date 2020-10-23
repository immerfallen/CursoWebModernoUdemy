function calculaAnoBissexto(ano) {

    if (ano <= 0) {
        console.log('Não é ano bissexto')
        return false
    } else if (ano % 400 == 0) {
        console.log("É ano bissexto")
        return true
    } else if (ano % 100 == 0) {
        console.log('Não é ano bissexto')
        return false
    } else if (ano % 4 == 0) {
        console.log("É ano bissexto")
        return true
    } else {
        console.log('Não é ano bissexto')
        return false
    }

}

console.log(calculaAnoBissexto(0))
console.log(calculaAnoBissexto(4))
console.log(calculaAnoBissexto(100))
console.log(calculaAnoBissexto(400))
console.log(calculaAnoBissexto(800))
console.log(calculaAnoBissexto(2020))
console.log(calculaAnoBissexto(2021))