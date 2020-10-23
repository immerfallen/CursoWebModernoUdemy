function planoSalario(salario, plano) {

    let aumento
    let salarioNovo
    switch (plano) {
        case 'A':
            aumento = 10 / 100
            salarioNovo = salario * (1 + aumento)
            return salarioNovo
            break
        case "B":
            aumento = 15 / 100
            salarioNovo = salario * (1 + aumento)
            return salarioNovo
            break
        case "C":
            aumento = 20 / 100
            salarioNovo = salario * (1 + aumento)
            return salarioNovo
            break
        default:
            console.log("Plano invalido")
            break

    }
}

console.log(planoSalario(1000, "D"))