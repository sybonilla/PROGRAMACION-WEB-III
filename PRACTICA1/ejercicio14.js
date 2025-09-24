//14.	Proporcione un ejemplo para convertir una promesa en un callback. 
//PROMESA
let promesa = () => {
    return new Promise((resolve, reject) => {
        resolve("se ejecuto la promesa")
        reject("ocurrio un error")
    })
}
let promesaAcallback = (promesaF, callback) => {
    promesaF().then(resp => {
        callback(resp)
    }).catch(error => {
        callback(error)
    })
}
promesaAcallback(promesa, (result) => {
    console.log("¿Que paso?: ", result)
})