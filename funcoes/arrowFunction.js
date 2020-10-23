let dobro = function (a) {
    return a * 2
}
dobro = (a) => {
    return a * 2
}


dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function (){
    return 'Ola'
}

ola = () => 'Ola'

ola = _ => 'Ola' // possui um parametro

console.log(ola())
