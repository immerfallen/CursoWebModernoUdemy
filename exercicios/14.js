function escolhaFruta(fruta) {
    switch (fruta) {
        case "maçã":
            console.log('Não vendemos essa fruta aqui')
            break
        case "kiwi":
            console.log('Estamos com escassez de kiwis')
            break
        case "melancia":
            console.log('Aqui está, são 3 reais o kilo')
            break
        default:
            console.log('Fruta inválida')
            break
    }
}
escolhaFruta("maçã")
escolhaFruta("kiwi")
escolhaFruta("melancia")
escolhaFruta("uva")