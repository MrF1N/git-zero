/*Mobile menu*/
const mobile_menu = document.querySelector('.mobile-menu');
const mobile_menu_toggle = document.querySelector('.nav-toggle');
const menu_links = document.querySelectorAll('.menu_link');
const body = document.querySelector("body");


mobile_menu_toggle.addEventListener('click', function () {
    mobile_menu.classList.toggle('active');
    body.classList.toggle("scroll-stop");
});

menu_links.forEach(function (e) {
    e.addEventListener('click', function () {
        mobile_menu.classList.remove('active');
        body.classList.remove("scroll-stop");
    });
});

/*Popup*/