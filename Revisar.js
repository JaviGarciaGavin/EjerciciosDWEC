function RevisarDNI() {

var dni = prompt("Introzuca su número de DNI");
var letraDNI = dni.substring(8, 9);
var numDNI = parseInt(dni.substring(0, 8));

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var letraCorrecta = letras[numDNI % 23];

if(numDNI == /\d{8}[a-z A-Z]/){
  numDNI = parseInt(prompt("Introzuca un número válido de DNI"));
}
else{
  if(letraDNI.toUpperCase() != letraCorrecta){
    alert("Has introducido una letra incorrecta" + "\n" + "Tu letra debería ser: " + letraCorrecta);
  }
  else{
    alert("Enhorabuena hemos podido validar tu DNI");
  }
}   
}