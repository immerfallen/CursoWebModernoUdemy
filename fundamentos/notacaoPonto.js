console.log(typeof console)
console.log(Math.ceil(6.11))
const obj1 = {}
obj1.nome = "maro"
//obj1['nome'] = "maro1"

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log("Exec...")
    }
}
const Obj2 = new Obj("cadeira")
const Obj3 = new Obj("mesa")

console.log(Obj2.nome)
console.log(Obj3.nome)
Obj3.exec()