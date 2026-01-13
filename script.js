
document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open'); // Alternar la clase 'open'
});

document.getElementById('close-menu').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open'); // Cerrar el menú
});

  const logoImg = document.querySelector('.logo-image');
        logoImg.addEventListener('mouseenter', () => {
            logoImg.style.opacity = '0';
            setTimeout(() => {
                logoImg.src = 'images/logo_color.png';
                logoImg.style.opacity = '1';
            }, 100);
        });
        logoImg.addEventListener('mouseleave', () => {
            logoImg.style.opacity = '0';
            setTimeout(() => {
                logoImg.src = 'images/logo_blanco.png';
                logoImg.style.opacity = '1';
            }, 100);
        });
    