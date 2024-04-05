const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var logoImg = document.querySelector('.logo img');
    var logoName = document.querySelector('.logo-name');

    if (window.scrollY > 0) {
        logoImg.style.display = 'none';
        logoName.style.display = 'inline';
    } else {
        logoImg.style.display = 'inline';
        logoName.style.display = 'none';
    }
});

