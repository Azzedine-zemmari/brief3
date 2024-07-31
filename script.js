document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mainMenu = document.querySelector('.main-menu');

  burger.addEventListener('click', () => {
      if (mainMenu.style.display === 'block') {
          mainMenu.style.display = 'none';
      } else {
          mainMenu.style.display = 'block';
      }
  });
});
