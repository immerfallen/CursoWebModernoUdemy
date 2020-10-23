function divisivelPorTres(numero) {
    if (numero % 3 == 0) {
        console.log('Numero é divisivel por 3.')
        return true

    } else {
        console.log('Numero nao e divisivel por 3')
        return false
    }
}

divisivelPorTres(3)