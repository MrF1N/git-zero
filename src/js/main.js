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
const popup_more_learn_overlay = document.querySelector('.popup-more-learn-overlay');
const learn_form = document.getElementById('learn-popup');

const close_popup = () => {
    more_learn_popup.classList.remove("active-popup");
    body.classList.remove("scroll-stop");
    learn_form.reset();
};

more_learn_button.addEventListener('click', function (e) {
    e.preventDefault();
    more_learn_popup.classList.toggle('active-popup');
    body.classList.toggle("scroll-stop");
});

close_popup_button.addEventListener('click',
    () => close_popup()
);

popup_more_learn_overlay.addEventListener('click',
    () => close_popup()
);

/*Popup ajax request*/
const success_url = 'https://httpbin.org/status/200';
const bad_url = 'https://httpbin.org/status/400';

const learn_popup_form = document.forms['learn-popup'];

function sendData(url, method) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(null),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        return response.status < 400
            ? response.text()
            : response.text().then(() => {throw new Error("")});
    });
}


learn_popup_form.onsubmit = e => {
    e.preventDefault();

    const name = learn_popup_form.elements['learn-popup-name'].value;
    const phone = learn_popup_form.elements['learn-popup-phone'].value;

    let url;

    if (name == "" || phone == "") {
        url = bad_url;
    } else {
        url = success_url
    }
    sendData(url, "POST")
        .then(function () {
            alert("Thanks for your request, " + name + ".");
            close_popup();
        })
        .catch(function () {
            alert("Bad request, please check your params.");
        });
};
