const valor = 'Global'

function minhaFuncao() {
    console.log(valor)

}
function exe(){
    const valor = 'Local'
    minhaFuncao()

}

exe()
