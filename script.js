/* Global styles */

// This script makes the button appear when scrolling down
window.addEventListener('scroll', function() {
    const button = document.querySelector('.subscribe-btn');
    const scrollPosition = window.scrollY;
    const threshold = 200; // When you scroll 200px down, the button fades in

    if (scrollPosition >= threshold) {
        button.classList.add('visible');
    } else {
        button.classList.remove('visible');
    }
});
