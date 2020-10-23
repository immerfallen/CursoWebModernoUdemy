function baskhara(a, b, c) {
    if (b * b - 4 * a * c < 0) {
        console.log('Delta negativo')
    } else {
        let s1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)
        let s2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)
        const solucoes = []
        solucoes.push(s1, s2)
        console.log(solucoes)

    }
}

baskhara(1, 3, 2)
baskhara(3, 1, 2)