function repetidos(array) {
    const contador = {};
    
    array.forEach(elemento => {
        contador[elemento] = (contador[elemento] || 0) + 1;
    });
    
    return Object.values(contador);
}
console.log(repetidos([2, 3, 2, 4]));  
console.log(repetidos([1, 1, 1]));      
console.log(repetidos([2, 3, 3, 2]));  