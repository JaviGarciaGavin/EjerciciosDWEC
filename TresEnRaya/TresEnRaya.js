let tablero = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

const jugadores = ['X', 'O'];
let turno = 0;

function mostrarTablero() {
    console.clear();
        for (let i = 0; i < 3; i++) {
            console.log(tablero[i][0] + ' | ' + tablero[i][1] + ' | ' + tablero[i][2]);
            if (i < 2) {
                console.log("---------");
            }
        }
    }

    function comprobarVictoria() {
    for (let i = 0; i < 3; i++) {
        if (tablero[i][0] === jugadores[turno] && tablero[i][1] === jugadores[turno] && tablero[i][2] === jugadores[turno]) {
            return true; 
        }
    }
    for (let i = 0; i < 3; i++) {
        if (tablero[0][i] === jugadores[turno] && tablero[1][i] === jugadores[turno] && tablero[2][i] === jugadores[turno]) {
            return true; 
        }
    }

    if (tablero[0][0] === jugadores[turno] && tablero[1][1] === jugadores[turno] && tablero[2][2] === jugadores[turno]) {
        return true; 
    }
    if (tablero[0][2] === jugadores[turno] && tablero[1][1] === jugadores[turno] && tablero[2][0] === jugadores[turno]) {
        return true; 
    }
    return false; 
}

function comprobarTableroLleno() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tablero[i][j] === '') {
                return false; 
            }
        }
    }
    return true; 
}
function jugar() {
    while (true) {
        mostrarTablero();
        let posicion = prompt(`Turno de ${jugadores[turno]}. Elige una casilla (1-9):`);
        posicion = parseInt(posicion) - 1;

        const fila = Math.floor(posicion / 3);
        const columna = posicion % 3;

        if (tablero[fila][columna] === '') {
           
            tablero[fila][columna] = jugadores[turno];
            comprobarVictoria()
            comprobarTableroLleno()
            if (comprobarVictoria()) {
                mostrarTablero();
                alert(`Se acabo==> ${jugadores[turno]} ganan.`);
                break;
            }
    
            if (comprobarTableroLleno()) {
                mostrarTablero();
                alert("¡Es un empate!");
                break;
            }
            turno = 1 - turno;
        } else {
            alert("Casilla ocupada, elige otra.");
        }
        
       
    }
}


jugar();
