// ejemplo 1
var list: string[] = ["juan", "pedro", "maria", "luisa"];

/* function concatenateNames(list) {
  let concatenatedNames = "";
  for (let index = 0; index < list.length; index++) {  
      concatenatedNames +=  list[index] + " ";  
  }
  
  return concatenatedNames;
 
}

console.log(concatenateNames(list));  */


function concatenados(list: String[]) {
  let retorno = ""
  list.map(value => { retorno += value + " " })
  return retorno
}

console.log(concatenados(list))


// funcion al cuadrado
var xy: number[] = [2, 3, 4]
var contador: number = 0


console.log(xy)
function cuadrado(list: Array<number>) {
  
  list.map(elevado => {
    list[contador] *= elevado
    contador++
  })
  return list
  }

console.log(cuadrado(xy))
console.log('voltear la lista')


// voltear la lista
var xy: number[] = [3, 4, 5]
var contador: number = 1
console.log(xy)
function voltear(list: Array<number>) {
  var volteada:Array<number>=[]
    list.map(elevado => {
          volteada[list.length-contador]=elevado
    contador++
  })
  return volteada
  }

console.log(voltear(xy))
console.log(contador)

// copia esto en visual studio y mira el typescript
let achu:[string,number]
let adios = [1,2]
let arreglo:Array<number>
let lista: Number[]
//////////////

function fmodulo(x: number, modulo?: number): number {
  if (modulo && modulo > 0) {
    return x % modulo;
  } else {
    return x % 2;
  }
}

console.log(fmodulo(35, 30));
console.log(fmodulo(35));
/////////////
var msg = function() { 
   return "Hola Mundo";  
} 
console.log(msg())

function hola() {
    console.log('Hola');
    function mundo(){
        console.log(' Mundo!'); 
    }
    return mundo;
}

var s = hola();
console.log('break');
s();
hola()()
