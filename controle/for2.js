const notas = [6.7, 8.9, 7.6, 8.7, 6.8]
for (let i in notas) { 
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Melo',
    idade: 32,
    peso: 50
}

for (let atributo in pessoa)
console.log(`${atributo} = ${pessoa[atributo]}`)
