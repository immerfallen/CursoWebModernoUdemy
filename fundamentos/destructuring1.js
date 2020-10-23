const cliente = {
    nome: "Pedro",
    idade: 32,
    pedo: 90,
    endereco: {
        logradouro: "rua Tal",
        Cep: 54684654
    }}

    const {nome, idade} = cliente
    console.log(nome, idade)

    const {nome: n, idade: i} = cliente
    console.log(n, i)
        
    const {sobrenome, bemHumorada = true} = cliente

    console.log(sobrenome, bemHumorada)

    const {endereco: {logradouro, Cep, numero}} = cliente

    console.log(logradouro, Cep, numero)
