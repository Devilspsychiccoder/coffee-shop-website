// Smooth Scroll for navigation links
const links = document.querySelectorAll('nav ul li a');
for (let link of links) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Offset for header height
            behavior: 'smooth'
        });
    });
}

// Sticky navigation bar
const nav = document.querySelector('header');
const sticky = nav.offsetTop;

window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
};

