function escolhaFruta(carro) {
    switch (carro) {
        case "hatch":
            console.log('Compra efetuada com sucesso')
            break
        case "sedan":
            console.log('Tem certeza que prefere esse modelo?')
            break
        case "motocicleta":
            console.log('Tem certeza que prefere esse modelo?')
            break
        default:
            console.log('Não temos esse carro')
            break
    }
}
escolhaFruta("hatch")
escolhaFruta("sedan")
escolhaFruta("motocicleta")
escolhaFruta("caminhao")