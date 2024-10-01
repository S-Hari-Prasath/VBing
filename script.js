const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// Optional: Close the mobile menu when a menu item is clicked
const menu_items = document.querySelectorAll('nav ul li a');
menu_items.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobile_menu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
