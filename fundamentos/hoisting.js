// o código iça a variável mas nao leva seu valor. Por isso dá undefined 
// var a - é isso que o hoisting faz

console.log('a = ', a)
var a = 2
console.log('a = ', a)

console.log('b = ', b)
let b = 2
console.log('b = ', b)


