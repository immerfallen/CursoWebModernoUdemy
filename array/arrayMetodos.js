const pilotos = ['Vettle', 'Alonso', 'Raikonnen,', 'Massa']
pilotos.pop() // exclui o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //inclui um elemento depois da ultima posicao do array
console.log(pilotos)

pilotos.shift() //tipo o pop, mas tirando da primeira posicao
console.log(pilotos)

pilotos.unshift('Maro')
console.log(pilotos)

//splice pode adicionar e remover elementos no array

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // exclui o massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna uma novo array a partir do indice informado
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1, 4) // o primeiro elemento entra no array gerado, já o segundo elemento nao entra no novo array gerado
console.log(algunsPilotos2)