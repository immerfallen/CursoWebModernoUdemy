function diaDaSemana(dia) {
    switch (dia) {
        case 1:
            console.log('domingo')
            break
        case 2:
            console.log('segunda')
            break
        case 3:
            console.log('terca')
            break
        case 4:
            console.log('quarta')
            break
        case 5:
            console.log('quinta')
            break
        case 6:
            console.log('sexta')
            break
        case 7:
            console.log('sabado')
            break
        default:
            console.log('Dia inválido')
            break
    }
}

diaDaSemana(8)