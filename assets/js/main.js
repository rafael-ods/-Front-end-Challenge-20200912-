const menu = document.querySelector('.menu-link')
const dropDownMenu = document.querySelector('.menu-list-user')
const arrown = document.querySelector('.icon-arrown')

menu.addEventListener('click', (e) => {
    e.preventDefault();
    dropDownMenu.classList.toggle('show-menu');
    if(arrown.classList.contains('arrown-rotate')) {
        arrown.classList.toggle('arrown-rotate')
    } else {
        arrown.classList.add('arrown-rotate')
    }
})

/** MOBILE */

const menuMobile = document.querySelector('.menu__button')
const dropDownMobile = document.querySelector('.menu-mobile')

menuMobile.addEventListener('click' , () => {
    dropDownMobile.classList.toggle('menu-mobile-show')
})