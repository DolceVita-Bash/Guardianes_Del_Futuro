// script.js

document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.getElementById('tooltip');
    const svg = document.getElementById('cuerpo-humano');

    // Obtener todas las partes del cuerpo que son clickeables
    const partes = svg.querySelectorAll('circle, rect, ellipse, path'); // Añade más selectores si usas diferentes elementos

    partes.forEach(parte => {
        parte.addEventListener('mouseenter', (e) => {
            const nombre = obtenerNombre(parte.id);
            tooltip.textContent = nombre;
            tooltip.style.opacity = 1;

            // Posicionar el tooltip cerca del cursor
            const rect = svg.getBoundingClientRect();
            tooltip.style.left = `${e.clientX - rect.left + 10}px`;
            tooltip.style.top = `${e.clientY - rect.top + 10}px`;
        });

        parte.addEventListener('mousemove', (e) => {
            const rect = svg.getBoundingClientRect();
            tooltip.style.left = `${e.clientX - rect.left + 10}px`;
            tooltip.style.top = `${e.clientY - rect.top + 10}px`;
        });

        parte.addEventListener('mouseleave', () => {
            tooltip.style.opacity = 0;
        });

        parte.addEventListener('click', () => {
            const nombre = obtenerNombre(parte.id);
            alert(`Seleccionaste: ${nombre}`);
            // Puedes reemplazar el alert con otra acción, como mostrar información en una sección específica
        });
    });

    // Función para convertir el ID en un nombre legible
    function obtenerNombre(id) {
        const nombres = {
            'cabeza': 'Cabeza',
            'cuello': 'Cuello',
            'torso': 'Torso',
            'brazo-izquierdo': 'Brazo Izquierdo',
            'brazo-derecho': 'Brazo Derecho',
            'mano-izquierda': 'Mano Izquierda',
            'mano-derecha': 'Mano Derecha',
            'pierna-izquierda': 'Pierna Izquierda',
            'pierna-derecha': 'Pierna Derecha',
            'pie-izquierdo': 'Pie Izquierdo',
            'pie-derecho': 'Pie Derecho'
            // Agrega más partes según sea necesario
        };
        return nombres[id] || 'Parte Desconocida';
    }
});
