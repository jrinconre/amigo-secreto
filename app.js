// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Agrega un amigo a la lista.
 * Captura el nombre del campo de entrada, valida que no esté vacío,
 * lo añade al array 'amigos' y actualiza la lista visible en la página.
 */
function agregarAmigo() {
    // Obtener el elemento de entrada y la lista de amigos del DOM
    let amigoInput = document.getElementById('amigo');
    let lista = document.getElementById('listaAmigos');
    let nombreAmigo = amigoInput.value.trim();

    // Validar que el campo de entrada no esté vacío
    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución si no hay nombre
    }

    // Añadir el nuevo amigo al array
    amigos.push(nombreAmigo);

    // Actualizar la lista de amigos en el HTML
    // Se muestra el array completo para que el usuario vea todos los nombres agregados
    lista.innerHTML = amigos.join(', ');

    // Limpiar el campo de entrada para el siguiente nombre
    amigoInput.value = '';
}

/**
 * Realiza el sorteo del amigo secreto.
 * Selecciona un nombre aleatorio del array 'amigos' y lo muestra en la pantalla.
 */
function sortearAmigo() {
    // Validar que la lista de amigos no esté vacía antes de sortear
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear. Por favor, agregue al menos un nombre.");
        return; // Detiene la ejecución si no hay amigos
    }

    // Generar un índice aleatorio
    // Math.random() genera un número entre 0 y 1 (no inclusivo)
    // Se multiplica por la longitud del array para obtener un número en el rango deseado
    // Math.floor() redondea hacia abajo para obtener un índice de array válido (0 a n-1)
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado usando el índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento designado en el HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}