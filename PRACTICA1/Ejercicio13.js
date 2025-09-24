//13.	Proporcione un ejemplo concreto donde el anidamiento de promesas se puede reescribir mejor con async/await haciendo el código más limpio y mantenible. 
let f1 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("funcion 1 ejecutada")
            resolve()
        }, 1000)
    })
}
let f2 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("funcion 2 ejecutada")
            resolve()
        }, 1000)
    })
}
let f3 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("funcion 3 ejecutada")
            resolve()
        }, 1000)
    });
}
//ANIDAMIENTO DE PROMESAS
f1().then(() => {
    return f2()
}).then(()=>{
    return f3()
}).then(()=>{
    console.log("Se termino de ejecutar todas las funciones")
});
//CODIGO CON ASYNC/AWAIT
async function funcion() {
    await f1()
    await f2()
    await f3()
    console.log("Se termino de ejecutar todas las funciones")
}
funcion();
