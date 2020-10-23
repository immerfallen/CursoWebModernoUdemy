function Pessoa() {
this.idade = 0

const self = this
setInterval(function (){
    self.idade++
    console.log(self.idade)
}/*.bind(this)*/, 1000)
}

new Pessoa // contexto do this é outro pois esta no setInterval - colocar bind depois do setinterval
