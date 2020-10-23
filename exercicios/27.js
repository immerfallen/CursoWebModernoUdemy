function taxaCrescimento(altura1,taxa1,altura2,taxa2){
    let ano = (altura1-altura2)/(taxa2-taxa1)
    if (ano>0){
        console.log(ano)
    } else{
        console.log('Não passará a altura')
    }

}
taxaCrescimento(150,2,130,4)
