var numero = 1 // sempre fugir do escopo global em JS
{
    var numero = 2
    console.log('dentro= ', numero)
}
console.log('fora=', numero)