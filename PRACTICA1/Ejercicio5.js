//5.	Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y al revés). 
//let band = miFuncion(“oruro”) 
//console.log(band) // true 
//let band = miFuncion(“hola”) 
//console.log(band) // false 

let miFuncion = (texto) => {
  let esPalindromo = false
  let tamaño = texto.length
  let textoInvertido = ""
  for(let i=tamaño-1; i>=0; i--){
    textoInvertido = textoInvertido + texto[i]
  }
  if(textoInvertido == texto){
    esPalindromo = true
  }
  return esPalindromo
}
let band1 = miFuncion("oruro") 
console.log(band1) 
let band2 = miFuncion("hola") 
console.log(band2)