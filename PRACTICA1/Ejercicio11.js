//11.	Proporcione un ejemplo concreto de encadenamiento de promesas. 
let parOimpar = (numero) => {
    return new Promise((resolve, reject) => {
        let espar
        if (numero % 2 == 0) {
            espar = true
            console.log("El numero es par")
        } else {
            espar = false
            console.log("El numero es impar")
        }
        if (typeof (espar) == "boolean") {
            resolve(numero)
        } else {
            reject("No se pudo verificar si es par o impar")
        }
    })
}
let esPrimo = (anterior) => {
    return new Promise((resolve) => {
        let primo = true
        for (let i = 2; i < anterior; i++) {
            if (anterior % i == 0) {
                primo = false
            }
        }
        if (primo) {
            console.log("El numero es primo")
        } else {
            console.log("El numero no es primo")
        }
        resolve(anterior)
    })
}
let esPerfecto = (anterior2) => {
    return new Promise((resolve) => {
        let sum = 0;
        for (let i = 1; i < anterior2; i++) {
            if (anterior2 % i === 0) {
                sum = sum + i;
            }
        }
        if (sum == anterior2) {
            console.log("El numero es perfecto");
        } else {
            console.log("El numero no es perfecto");
        }
        resolve(anterior2)
    })
}
let numero = 11
parOimpar(numero).then(resp =>{
    return esPrimo(resp)
}).then(resp => {
    return esPerfecto(resp)
}).then(resp =>{
    console.log(`el numero averiguado fue: ${resp}`)
}).catch(e =>{
    console.log(e)
}).finally(()=>{
    console.log("------------------------------")
})