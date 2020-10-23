let contador = 1
while (contador <= 10) {
    console.log(`contador: ${contador}`)
    contador++
}

for (let i = 1; i <= 10; i++) {
    console.log(`contador com for: ${i}`)
}

const notas = [6.7, 8.9, 7.6, 8.7, 6.8]
for (let i = 0; i < notas.length; i++) { 
    console.log(`A nota foi: ${notas[i]}`)
}
