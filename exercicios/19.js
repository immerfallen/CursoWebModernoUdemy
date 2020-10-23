function valorLanche(codigo, quantidade) {
    let valor
    switch (codigo) {
        case 100:
            valor = quantidade * 3
            return valor
            break
        case 200:
            valor = quantidade * 4
            return valor
            break
        case 300:
            valor = quantidade * 5.5
            return valor
            break
        case 400:
            valor = quantidade * 7.5
            return valor
            break
        case 500:
            valor = quantidade * 3.5
            return valor
            break
        case 600:
            valor = quantidade * 2.8
            return valor
            break
        default:
            console.log('produto inexistente')
            break

    }
}

console.log(valorLanche(800, 2))