//PROTOTYPE CHAIN

Object.prototype.attr0 = 'z' // nao é recomandado fazer essa manipulação pois isso impacatará em toda a estrutura
const avo = {
    attr1: 'a'
}
const pai = {
    __proto__: avo,
    attr2: 'b',
    attr3: '3' // o atrr3 do filho sombreou esse atributo do pai
}
const filho = {
    __proto__: pai,
    attr3: 'c'
}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 150,
    acelarMais(delta) {
        if (this.velAtual + delta < this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }

}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing no atributo velMax do objeto carro
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //super é referencia ao prototype - mesma funcao do this so que no contexto de herança
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelarMais(100)
console.log(volvo.status())
ferrari.acelarMais(130)
console.log(ferrari.status())
ferrari.acelarMais(130)
console.log(ferrari.status())
ferrari.acelarMais(130)
console.log(ferrari.status())