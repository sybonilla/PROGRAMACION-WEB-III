//16.	Proporcione un ejemplo para migrar una función con promesas a async/await.
let promesa = () => {
    return new Promise(resolve => {
            resolve("se ejecuto la promesa");
    });
}
promesa().then(resultado => {
    console.log("Promesa:", resultado)
});
async function funcion() {
    const resultado = await promesa()
    console.log("async/await:", resultado)
}
funcion()