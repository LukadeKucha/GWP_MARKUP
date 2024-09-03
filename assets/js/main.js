// responsive menu 
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    menuToggle.addEventListener('click', () => {
        mobileMenu.style.left = '0';
        menuOverlay.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
        mobileMenu.style.left = '-308px';
        menuOverlay.classList.remove('active');
    });

    menuOverlay.addEventListener('click', () => {
        mobileMenu.style.left = '-308px';
        menuOverlay.classList.remove('active');
    });
});


// active color current menu item 
const currentPath = window.location.pathname;
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    const link = item.querySelector('a');

    if (link.getAttribute('href') === currentPath) {
        item.classList.add('menu-active'); 
    }
});