console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados[8] === undefined)
aprovados.sort() // altera a posicao dos itens do array
console.log(aprovados)

delete aprovados[1] // nao altera o array - coloca undefined na posicao

console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // possui duas sobrecargas - uma que passa o valor inicial da alteracao juntamente com o numero de elementos a serem excluidos, ou entao a outra sobrecarga que pode adicionar elementos 
console.log(aprovados)
aprovados.splice(1, 1, 'Maro', 'Joy')
console.log(aprovados)
aprovados.splice(1, 0, 'Ricardo', 'Paulo', 3)
console.log(aprovados)

//array é dinâmico em js - array é um objeto em js - nao tem uma estrutura propria de array - comeca no indice zero - acessando um indice que nao existe retorna undefined - se houver um array constante, nao significa que os elementos do array sao constantes
// mas tao somente que o endereco de memoria daquele array é constante.