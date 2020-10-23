const saudacao = 'Opa' //contexto lexico 1 - local fisico do codigo que aquele valor foi definido

function exec(){
    const saudacao = 'Falaaaa' // contexo lexico 2 
    return saudacao
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    pedo: 90,
    endereco: {
        logradouro: "rua Tal",
        Cep: 54684654
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)