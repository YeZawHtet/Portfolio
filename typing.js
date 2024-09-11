//typing with cdnjs.com


var typed = new Typed('.typing', {
  strings: ['', 'Web Developer', 'Self-taught Learner', 'Junior Web Developer', 'Programmer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

const navToggler = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');
navToggler.addEventListener('click', () => {
  navToggler.classList.toggle('active');
  aside.classList.toggle('active');
});
aside.addEventListener('click', () => {
  navToggler.classList.remove('active');
  aside.classList.remove('active');
});
