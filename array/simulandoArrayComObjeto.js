const quaseArray = { 0: 'Rafael', 1: 'Maro', 2: 'Ricardo' }
console.log(quaseArray) // elemento é um objeto e nao um array
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) }, // a funcao poderia ter sido colocada dentro do objeto, mas dessa forma podemos declarar ela como nao enumerada, assim, ela nao vai aparecer no objeto
    enumerable: false

})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Maro', 'Ricardo']
console.log(quaseArray.toString(), meuArray)