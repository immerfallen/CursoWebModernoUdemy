const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar

falar() // conflito entre funcional e orientada a objetos

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
