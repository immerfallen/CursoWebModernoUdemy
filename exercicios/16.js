function calculadora(a, b, operacao) {
    switch (operacao) {
        case "+":
            console.log(a + b)
            break
        case "-":
            console.log(a - b)
            break
        case "*":
            console.log(a * b)
            break
        case "/":
            console.log(a / b)
            break
        default:
            console.log('Operacao invalida')
            break
    }
}
calculadora(1, 2, "+")
calculadora(1, 2, "-")
calculadora(1, 2, "*")
calculadora(1, 2, "/")
calculadora(1, 2, "o")