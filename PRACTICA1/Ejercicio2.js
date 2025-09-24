//2.	Crear una función que invierta el orden de las palabras en una frase.
//let cad = miFuncion(“abcd”) 
//console.log(obj) // dcba 

let miFuncion = (texto) => {
  let textoInvertido = ""
  let tamaño = texto.length
  for(let i=tamaño-1; i>=0; i--){
    textoInvertido = textoInvertido + texto[i]
  }
  return textoInvertido
}
let obj = miFuncion("abcd")
console.log(obj)