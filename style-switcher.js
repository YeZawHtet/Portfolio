// toggle style switcher

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});

//Hide style - switcher on scroll
window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open');
    }
})

//Theme color
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }

    });
}

// Theme Light and dark Mode
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun')
    } else {
        dayNight.querySelector('i').classList.add('fa-moon')
    }
})

//show active animations
const navLinks = document.querySelectorAll('.nav-link');
function changeActive(clickedLink) {
    navLinks.forEach((link) => {
        if (link === clickedLink) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        changeActive(link);
    });
});




