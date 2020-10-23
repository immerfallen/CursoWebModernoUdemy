let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))


/*let vetorString = ['maro', 'lambança', 'loucura', 'celular']
let vetorInt = [1,2,3,4]
let vetorDouble = [1.4,1.5,1.6,1.7]

function conca(vetorString, vetorInt,vetorDouble){
    let vetor1= vetorString.concat()
    let vetor2 = vetor1.concat(vetorDouble)
    console.log(vetor2)
}

console.log(conca()) */