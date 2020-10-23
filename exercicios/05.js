function arred(a, b, moeda = 'R$') {
    console.log(`${moeda}${(a + b).toFixed(2)}`)
}

arred(0.1, 0.2)