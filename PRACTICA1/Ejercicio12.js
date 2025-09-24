//12.	Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede reescribir mejor con async/await haciendo el código más limpio y mantenible. 
// ANIDAMIENTO DE CALLBACKS
let f1 = (callback) => {
    setTimeout(() => {
        console.log("funcion 1 ejecutada")
        callback()
    }, 1000)
}
let f2 = (callback) => {
    setTimeout(() => {
        console.log("funcion 2 ejecutada")
        callback()
    }, 1000)
}
let f3 = (callback) => {
    setTimeout(() => {
        console.log("funcion 3 ejecutada")
        callback()
    }, 1000)
}
f1(() => {
    f2(() => {
        f3(() => {
            console.log("Se termino de ejecutar todas las funciones");
        });
    });
});
console.log("----------------------------------------------------------------")
//CODIGO CON ASYNC/AWAIT
let ff1 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("funcion 1 ejecutada")
            resolve()
        }, 1000)
    })
}
let ff2 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("funcion 2 ejecutada")
            resolve()
        }, 1000)
    })
}
let ff3 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("funcion 3 ejecutada")
            resolve()
        }, 1000)
    });
}
async function funcion() {
    await ff1()
    await ff2()
    await ff3()
    console.log("Se termino de ejecutar todas las funciones")
}
funcion()