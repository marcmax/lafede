
document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open'); // Alternar la clase 'open'
});

document.getElementById('close-menu').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open'); // Cerrar el menú
});
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si la sección entra en el campo de visión
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2 // Se activa cuando el 20% de la sección es visible
    });

    // Seleccionamos todas nuestras filas y empezamos a observar
    const secciones = document.querySelectorAll('.fila-seccion');
   
    secciones.forEach(seccion => observer.observe(seccion));
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    }, false);

    // Evita que las imágenes se arrastren (refuerzo del CSS)
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    }, false);