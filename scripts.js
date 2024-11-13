// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Coffee menu data
    const coffeeMenu = [
        { name: "Espresso", price: "$2.50" },
        { name: "Cappuccino", price: "$3.00" },
        { name: "Latte", price: "$3.50" },
        { name: "Americano", price: "$2.75" },
        { name: "Mocha", price: "$3.25" }
    ];

    // DOM Elements
    const loadMenuBtn = document.getElementById('load-menu-btn');
    const coffeeMenuList = document.getElementById('coffee-menu');
    const carousel = document.getElementById('carousel');
    const countdownElem = document.getElementById('countdown');
    const contactForm = document.getElementById('contact-form');

    // 1. Load Coffee Menu dynamically
    loadMenuBtn.addEventListener('click', () => {
        coffeeMenuList.innerHTML = ''; // Clear existing menu
        coffeeMenu.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price}`;
            coffeeMenuList.appendChild(li);
        });
    });

    // 2. Implement Carousel (image sliding)
    let currentSlide = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');

    function moveToNextSlide() {
        currentSlide = (currentSlide + 1) % carouselItems.length;
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds

    // 3. Countdown Timer for Special Offer
    function startCountdown() {
        const targetDate = new Date("2024-12-01T00:00:00Z");
        const interval = setInterval(() => {
            const now = new Date();
            const timeLeft = targetDate - now;

            if (timeLeft <= 0) {
                clearInterval(interval);
                countdownElem.textContent = "Offer Ended!";
            } else {
                const hours = Math.floor(timeLeft / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                countdownElem.textContent = `${hours}h ${minutes}m ${seconds}s remaining!`;
            }
        }, 1000);
    }

    startCountdown();

    // 4. Handle Contact Form Submission with Validation
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert("Please fill out all fields!");
            return;
        }

        alert(`Thank you, ${name}! We have received your message: "${message}". We'll get back to you at ${email}.`);

        // Clear the form after submission
        contactForm.reset();
    });

    // 5. Smooth Scroll for Navigation
    const smoothScrollLinks = document.querySelectorAll('nav a');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for header height
                behavior: 'smooth'
            });
        });
    });
});

