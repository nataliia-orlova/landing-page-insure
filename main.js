const btnOpen = document.querySelector('[data-btn-open]');
const btnClose = document.querySelector('[data-btn-close]');
const overlay = document.querySelector('.overlay');

btnOpen.addEventListener('click', () => {
    overlay.classList.add('open');
    btnOpen.classList.add('notvisible');
    btnClose.classList.add('visible');
});

btnClose.addEventListener('click', () => {
    overlay.classList.remove('open');
    btnOpen.classList.remove('notvisible');
    btnClose.classList.remove('visible');
});
