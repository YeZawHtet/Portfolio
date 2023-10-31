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

//show animations
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const services = document.querySelector('#services');
const portfolio = document.querySelector('#portfolio');
const contact = document.querySelector('#contact');
const liHome = document.querySelector('.lihome');
const liAbout = document.querySelector('.liabout');
const liServices = document.querySelector('.liservices');
const liPortfolio = document.querySelector('.liportfolio');
const liContact = document.querySelector('.licontact')

liHome.addEventListener('click', () => {
    if (home.classList.contains('.hidden')) {
        home.classList.remove('hidden');
    }
    home.classList.remove('hidden');
    about.classList.add('hidden');
    services.classList.add('hidden');
    portfolio.classList.add('hidden');
    contact.classList.add('hidden');
})
liAbout.addEventListener('click', () => {
    if (about.classList.contains('.hidden')) {
        about.classList.remove('hidden');
    }
    about.classList.remove('hidden');
    home.classList.add('hidden');
    services.classList.add('hidden');
    portfolio.classList.add('hidden');
    contact.classList.add('hidden');
})
liServices.addEventListener('click', () => {
    if (services.classList.contains('.hidden')) {
        services.classList.remove('hidden');
    }
    about.classList.add('hidden');
    home.classList.add('hidden');
    services.classList.remove('hidden');
    portfolio.classList.add('hidden');
    contact.classList.add('hidden');
})
liPortfolio.addEventListener('click', () => {
    if (portfolio.classList.contains('.hidden')) {
        portfolio.classList.remove('hidden');
    }
    about.classList.add('hidden');
    home.classList.add('hidden');
    services.classList.add('hidden');
    portfolio.classList.remove('hidden');
    contact.classList.add('hidden');
})
liContact.addEventListener('click', () => {
    if (contact.classList.contains('.hidden')) {
        contact.classList.remove('hidden');
    }
    about.classList.add('hidden');
    home.classList.add('hidden');
    services.classList.add('hidden');
    portfolio.classList.add('hidden');
    contact.classList.remove('hidden');
})

//Menu for small devices

