let valor // nao inicializada
console.log(valor) // variavel definida  mas nao inicializada

valor = null // ausencia de valor - nao aponta pra nenhum local de memoria
console.log(valor)
    // console.log(valor.toString()) //Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
    // delete produto.preco
console.log(produto)

produto.preco = null // o produto esta sem preco
console.log(!!produto.preco)
console.log(produto) // para zerar um valor usa-se o null e deixa a linguagem escolher quando utilizar o undefined