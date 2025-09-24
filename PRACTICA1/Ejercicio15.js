//15.	Proporcione un ejemplo para convertir un callback en una promesa. 
let Fcallback = (callback) => {
        callback("funcion callback realizado", null);
}
let callbackApromesa = () => {
    return new Promise((resolve, reject) => {
        Fcallback((resp, err) => {
            if (err) {
                reject(err)
            }
            else{
               resolve(resp); 
            } 
        });
    });
}
async function funcion() {
    const dato = await callbackApromesa();
    console.log(dato);
}
funcion();