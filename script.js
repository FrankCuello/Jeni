document.addEventListener('DOMContentLoaded', () => {
    const cartas = document.querySelectorAll('.carta');
    const modal = document.getElementById('mensajeModal');
    const mensajeTexto = document.getElementById('mensajeTexto');
    const cerrarModalBtn = document.querySelector('.cerrar-modal');

    // --- PERSONALIZA TUS MENSAJES AQUÍ ---
    const mensajes = {
        1: "Mi Jenifer preciosa,\n\nCada día a tu lado es una aventura maravillosa. Tu sonrisa ilumina mis días y tu amor es el motor de mi vida. ¡Gracias por ser tú!",
        2: "Para la dueña de mis pensamientos,\n\nQuería recordarte lo increíble que eres y lo mucho que significas para mí. Eres mi confidente, mi alegría y mi amor eterno. Te amo.",
        3: "Jenifer, mi amor,\n\nNo hay palabras suficientes para describir lo feliz que me haces. Contigo he aprendido el verdadero significado del amor. Eres mi todo.",
        4: "Mi vida,\n\nEste es solo un pequeño detalle para decirte ¡TE AMO! Gracias por cada momento, cada risa y cada sueño compartido. Eres lo mejor que me ha pasado."
        // Puedes añadir más mensajes si añades más cartas en el HTML:
        // 5: "Otro mensaje bonito para Jenifer...",
    };
    // -------------------------------------

    cartas.forEach(carta => {
        carta.addEventListener('click', () => {
            const messageId = carta.getAttribute('data-message-id');
            if (mensajes[messageId]) {
                mensajeTexto.innerText = mensajes[messageId]; // innerText para interpretar saltos de línea \n
                modal.style.display = 'flex'; // Cambiado a flex para centrar con CSS
            }
        });
    });

    cerrarModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal si se hace clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});