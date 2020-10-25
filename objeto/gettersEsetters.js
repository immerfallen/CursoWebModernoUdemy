const sequencia = {
    _valor: 1, //convencao - pretendida ser acessada apenas internamente - coloca o underline antes
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }

    }

}

console.log(sequencia.valor, sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900 // ele nao passa no if do metodo set e simplesmente continua do ultimo valor armazenado na variavel
console.log(sequencia.valor, sequencia.valor)