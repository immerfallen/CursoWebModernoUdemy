// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao', }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: Ana} - recebe novo endereço de memória e dará erro no progama

Object.freeze(pessoa) // nao pode adicionar atributo, nao pode excluir, nao pode modificar a partir do freeze

pessoa.nome = "Maria"
console.log(pessoa.nome)

const pessoaConst = Object.freeze({ nome: 'Joao' }) // objeto ja nasce constante