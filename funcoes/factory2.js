function criarProduto(nome, preco){
    return {
        nome, 
        preco,
        desconto:  0.1
    }
}

console.log(criarProduto('Notebook', 125))
console.log(criarProduto('ipad', 1125))
