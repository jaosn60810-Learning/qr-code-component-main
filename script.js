const toggle = document.querySelector('.toggle');
const card = document.querySelector('.card');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
  body.classList.toggle('body-dark');
  card.classList.toggle('card-dark');
});
