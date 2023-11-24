//Animate on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.classList.add('show');
      } else {
          entry.classList.remove('show');
      }

  });
});
const allHiddens = document.querySelectorAll('.hidden');
allHiddens.forEach((el) => observer.observe(el));