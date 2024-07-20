
/** 1. Anunciar juego Piedra papel y tijeras, 
 *  2. Solicitar numero de rondas,
 *  3. conteo de las dos partes,
  */

alert('Juguemos a Piedra, Papel o tijera');
let Rondas = Number(prompt("Cantidad de rondas que quieres jugar"));
let puntajeUsuario = 0;
let puntajeCompu = 0;

// Función para obtener la elección de la computadora
function obtenerEleccionComputador() {
    const opciones = ["piedra", "papel", "tijera"];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opciones[indiceAleatorio];
}

// Función para determinar el ganador de una ronda
function determinarGanador(usuario, computador) {
    if (usuario === computador) {
        return "Empate";
    } else if (
        (usuario === "piedra" && computador === "tijera") ||
        (usuario === "papel" && computador === "piedra") ||
        (usuario === "tijera" && computador === "papel")
    ) {
        return "Usuario gana";
    } else {
        return "Computador gana";
    }
}

// Jugar las rondas
for (let i = 0; i < Rondas; i++) {
    let opcionUsuario = prompt("¿Cuál será su elección?: Piedra, papel o tijera:").toLowerCase();
    let eleccionCompu = obtenerEleccionComputador();

    // Mostrar las elecciones
    document.write(`<p>Ronda ${i + 1}:</p>`);
    document.write(`<p>Usuario eligió: ${opcionUsuario}</p>`);
    document.write(`<p>Computador eligió: ${eleccionCompu}</p>`);

    // Determinar y mostrar el ganador de la ronda
    let resultado = determinarGanador(opcionUsuario, eleccionCompu);
    document.write(`<p>${resultado}</p>`);

    // Actualizar el puntaje
    if (resultado === "Usuario gana") {
        puntajeUsuario++;
    } else if (resultado === "Computador gana") {
        puntajeCompu++;
    }
}

// Mostrar el puntaje final
document.write(`<p>Puntaje final: Usuario ${puntajeUsuario} - Computador ${puntajeCompu}</p>`);
if (puntajeUsuario > puntajeCompu) {
    document.write("<p>🥳 ¡El usuario gana el juego! 🥳</p>");
} else if (puntajeUsuario < puntajeCompu) {
    document.write("<p>¡El computador gana el juego! 🥺 </p>");
} else {
    document.write("<p>¡El juego termina en empate! 😁 </p>");
}

