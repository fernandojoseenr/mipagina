// Cuando la página termine de cargar
window.addEventListener('load', function() {
    alert('¡Bienvenido a mi página personal!');
});

// Cuando haces clic en el título (nombre), cambia el fondo
const titulo = document.querySelector('header h1');

titulo.addEventListener('click', function() {
    document.body.style.backgroundColor = generarColorAleatorio();
});

// Función para generar colores aleatorios
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
