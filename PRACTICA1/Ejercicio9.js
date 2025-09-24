//9.	Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.
let promesa = new Promise((resolve, reject) => {
    resolve(setTimeout(()=>{
        console.log("exito")
    },3000))
    reject("no tuvo exito")
})
promesa.then(respuesta =>{
    respuesta
}).catch(err =>{
    console.log("La promesa ",err)
})