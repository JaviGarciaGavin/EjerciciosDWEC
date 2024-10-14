array=[[1,2,3],
       [4,5,6],    
       [7,8,9]];


function transposeArray(array){
    var newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray[i]=[];
        for(let j = 0; j < array.length; j++){
            newArray[i][j]=array[j][i];
        };
    };
    return (newArray);
}
function eliminar(array, elemento) {
    var resultado = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== elemento) {
        resultado.push(array[i]);
      }
    }
    return resultado;
  } 
console.log(array);
let arrayTranspuesto=transposeArray(array);
console.log(arrayTranspuesto)
