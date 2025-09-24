//4.	Crear una función que reciba un arreglo de números y devuelva el número mayor y el menor, en un objeto. 
//let obj = miFuncion ([3,1,5,4,2]) 
//console.log(obj) // {mayor: 5, menor: 1} 

let miFuncion = (arreglo) => {
  let objeto = new Object()
  objeto = {
    mayor: arreglo[0],
    menor: arreglo[0]
  }
  for(let x of arreglo){
    if(x > objeto.mayor){
      objeto.mayor = x
    }else if(x < objeto.menor){
      objeto.menor = x
    }
  }
  return objeto
}
let obj = miFuncion ([3,1,5,4,2]) 
console.log(obj)
