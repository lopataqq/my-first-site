window.history.scrollRestoration = 'manual'; // отключение автоматической прокрутки браузера
window.scrollTo(0, 0); // прокрутка страницы в начало при загрузке

const burgerBtn = document.getElementById('burger-btn'); // добавление обработчика для кнопки бургер-меню
const mobileMenu = document.getElementById('mobile-menu'); // получение элемента мобильного меню

burgerBtn.addEventListener('click', function() { // при клике на кнопку
    mobileMenu.classList.toggle('open'); // переключение класса 'open' для мобильного меню
}); 