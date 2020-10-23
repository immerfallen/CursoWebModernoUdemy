function calculaAnuidade(mes,valor){
    atraso = mes-1
    return valor*Math.pow((1+5/100), atraso)
    

    }
console.log(calculaAnuidade(4, 100))
