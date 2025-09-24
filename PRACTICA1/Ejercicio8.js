//8.	Realizar un código para ejecutar una función callback después 2 segundos.
function miFuncion(callback){
    const tiempo = 2000
    setTimeout(callback,tiempo)
}
function f(){
    console.log("funcion callback")
}
miFuncion(f)