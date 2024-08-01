document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector(".burger");
    const phone = document.querySelector('.phone');

    burger.addEventListener('click', () => {
        phone.classList.toggle('hidden');
    });
});