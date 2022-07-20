// Vertical align for nav link

let header = document.querySelector('header')
let navLink = document.querySelectorAll('.header__nav__list__li__link')

function navLinkLineHeight(){
    let headerHeight = window.innerHeight/10
    // console.log(headerHeight)

    if (headerHeight > 100){
        navLink.forEach(link => {
            link.style.lineHeight = '100px'
        });
    } else if (headerHeight < 60){
        navLink.forEach(link => {
            link.style.lineHeight = '60px'
        });
    } else {
        navLink.forEach(link => {
            link.style.lineHeight = '10vh'
        });
    }
}

navLinkLineHeight()

window.addEventListener('resize', () => {
    navLinkLineHeight()
})

// Fake Timeout

let timeoutContainer = document.querySelector('.main__release-content__release__time')

function timeoutCreation(){
    let timeoutLength = 5 * 24 * 60 * 60

    timeoutContainer.innerHTML = '5d 0h 0m 0s'
    
    setInterval(() => {
        let newTimeout = timeoutLength--;

        let days = Math.floor(newTimeout / (60 * 60 * 24))
        let hours = Math.floor((newTimeout %( 60 * 60 * 24))/(60 * 60))
        let minutes = Math.floor((newTimeout % (60 * 60)) / 60);
        let seconds = Math.floor(newTimeout % 60);

        let formatTimeout = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's'

        timeoutContainer.innerHTML = formatTimeout
    }, 1000)
}

timeoutCreation();

// Slider

let left = document.querySelector('#left')
let middle = document.querySelector('#middle')
let right = document.querySelector('#right')

let back = document.querySelector('.main__primary-content__slider-container__arrow-container__left-arrow')
let next = document.querySelector('.main__primary-content__slider-container__arrow-container__right-arrow')

console.log(next);

let arrayProducts = [
    `<h3 class="main__primary-content__slider-container__side__product-title">Product1</h3><img src="./assets/products-img/snowboard-1.png" alt="" class="main__primary-content__slider-container__side__img"><p class="main__primary-content__slider-container__side__product-price">price</p>`,
    `<h3 class="main__primary-content__slider-container__side__product-title">Product2</h3><img src="./assets/products-img/bandana.png" alt="" class="main__primary-content__slider-container__side__img"><p class="main__primary-content__slider-container__side__product-price">price</p>`,
    `<h3 class="main__primary-content__slider-container__side__product-title">Product3</h3><img src="./assets/products-img/cagoule.png" alt="" class="main__primary-content__slider-container__side__img"><p class="main__primary-content__slider-container__side__product-price">price</p>`
]

let slideNb = 0;

next.addEventListener('click', function () { 

    slideNb++;

    if (slideNb > arrayProducts.length - 1) {
        slideNb = 0;
    }

    if(slideNb - 1 < 0){
        left.innerHTML = arrayProducts[arrayProducts.length - 1]
    } else {
        left.innerHTML = arrayProducts[slideNb - 1]
    }

    middle.innerHTML = arrayProducts[slideNb];

    if(slideNb + 1 > arrayProducts.length - 1){
        right.innerHTML = arrayProducts[0]
    } else {
        right.innerHTML = arrayProducts[slideNb + 1]
    }
})

back.addEventListener('click', function () { 

    slideNb--;

    if (slideNb < 0) {
        slideNb = arrayProducts.length - 1;
    }

    if(slideNb - 1 < 0){
        left.innerHTML = arrayProducts[arrayProducts.length - 1]
    } else {
        left.innerHTML = arrayProducts[slideNb - 1]
    }

    middle.innerHTML = arrayProducts[slideNb];

    if(slideNb + 1 > 5){
        right.innerHTML = arrayProducts[0]
    } else {
        right.innerHTML = arrayProducts[slideNb + 1]
    }
})

// back.addEventListener('click', function () {

//     slideNb--;

//     if (slideNb < 0) {
//         slideNb = 2;
//     }

//     document.getElementById("slide").src = slide[slideNb];

//     console.log(slideNb);
// })

// setInterval(function(){

//     slideNb++;

//     if (slideNb > slide.length - 1) {
//         slideNb = 0;
//     }

//     document.getElementById("slide").src = slide[slideNb];
// },5000)

// Ouverture Fermeture modal alert mail

const linkModal = document.querySelector('#alert-mail-link')
const btnClose = document.querySelector('#btn-close-modal')
const submitMail = document.querySelector('#input-submit-mail')
const modal = document.querySelector('#alert-mail-modal')

function openModal(){
    linkModal.addEventListener('click', () => {
        modal.classList.add('show')
    })
}

openModal()

function closeModal(){
    btnClose.addEventListener('click', () => {
        modal.classList.remove('show')
    })

    submitMail.addEventListener('click', () => {
        modal.classList.remove('show')
    })
}

closeModal()