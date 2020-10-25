const pessoa = {
    nome: 'Rebeca',
    idade: 13,
    peso: 45,

}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //se colocar falso dataNascimento não é listado no console.log
    writable: false,
    value: '01/10/2015'
})
pessoa.dataNascimento = '01/01/2015'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// ECMAScript 2015 Object.assign

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 1, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)


Object.freeze(obj)
obj.c = 1234
console.log(obj)