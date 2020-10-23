const valores = [12, 'Maro', 65, 56]
console.log(valores[0], valores[3], valores[4])
valores[4] = 'Ellen'
console.log(valores[0], valores[3], valores[4])
console.log(valores.length)
valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)
console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(typeof valores)