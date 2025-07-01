document.querySelector('.nav__link-theme').addEventListener('click', function () {
    const currentTheme = document.body.className;
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme'
    } else {
        document.body.className = 'light-theme'
    };
});

let cards;
let active = document.querySelector('.new_products__tech.active');

let npc = document.querySelector('.new_products__cards')
let active_cards = 'left1';

document.querySelectorAll('.new_products__tech').forEach(function (button) {
    button.onclick = function () {

        active.classList.remove('active')
        active = this

        cards = this.dataset.id
        this.classList.add('active')
        npc.classList.remove(active_cards)
        npc.classList.add('left' + cards)
        active_cards = 'left' + cards
    }
})

document.querySelector('.nav__link-grid').onclick = function () {
    document.querySelector('.menu__links').style.display = 'block';
};

document.querySelector('.nav__close-link').onclick = function () {
    document.querySelector('.menu__links').style.display = 'none';
};