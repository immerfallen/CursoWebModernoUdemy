function ladoTriangulo(a, b, c) {
    if (a == b && b == c) {
        console.log('Triângulo equilátero')
    } else if (a == b || a == c || b == c) {
        console.log('Triângulo isóceles')
    } else {
        console.log('Triângulo escaleno')
    }
}

ladoTriangulo(2, 1, 7)