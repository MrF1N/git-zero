/*Mobile menu*/
const mobile_menu = document.querySelector('.mobile-menu');
const mobile_menu_toggle = document.querySelector('.nav-toggle');
const menu_links = document.querySelectorAll('.menu_link');
const body = document.querySelector('body');

mobile_menu_toggle.addEventListener('click', function () {
    mobile_menu.classList.toggle('mobile-menu-active');
    mobile_menu_toggle.classList.toggle('mobile-menu-active');
    body.classList.toggle("scroll-stop");
});

menu_links.forEach(function (e) {
    e.addEventListener('click', function () {
        mobile_menu.classList.remove('mobile-menu-active');
        mobile_menu_toggle.classList.remove('mobile-menu-active');
        body.classList.remove("scroll-stop");
    });
});

/*Popup*/
const more_learn_button = document.querySelector('.more-learn-button');
const more_learn_popup = document.querySelector('.popup-more-learn');
const close_popup_button = document.querySelector('.close-popup-button');

more_learn_button.addEventListener('click', function (e) {
    e.preventDefault();
    more_learn_popup.classList.toggle('active-popup');
    body.classList.toggle("scroll-stop");
});

close_popup_button.addEventListener('click', function () {
    more_learn_popup.classList.remove("active-popup");
    body.classList.remove("scroll-stop");
});