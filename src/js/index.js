let imageSplide = new Splide( '#image-carousel', {
    type      : 'loop',
    padding   : '6rem',
    gap       : '1.25rem',
    pagination: false,
    start     : 1,
    drag      : true,
    autoplay  : true,
    interval  : 3000,
    arrows    : false,
  } ).mount();

const prevBtn = document.querySelector(".splide-custom__arrow--prev");
const nextBtn = document.querySelector(".splide-custom__arrow--next");

prevBtn.addEventListener("click", e => {
    imageSplide.go("-1")
})

nextBtn.addEventListener("click", e => {
    imageSplide.go("+1")
})

//аккордеон
const accordionHeads = document.querySelectorAll(".accordion-header");

accordionHeads.forEach(header => {
    header.addEventListener("click", () => {
        if (header.classList.contains("shown")) {
            header.classList.remove("shown");
        } 
        else {
            const accordionHeadsShown = document.querySelectorAll(".shown");
            accordionHeadsShown.forEach(itemShown => itemShown.classList.remove("shown"));
            header.classList.add("shown")
        }
    });
});

//подпункты меню
const navElements = document.querySelectorAll(".navbar-item-head");

navElements.forEach(item => { 
    item.addEventListener("click", () => {
        if (item.nextElementSibling.classList.contains("active")) {
            item.nextElementSibling.classList.remove("active");
        }
        else {
            const elemsActive = document.querySelectorAll(".active");
            elemsActive.forEach(itemActive => itemActive.classList.remove("active"));
            item.nextElementSibling.classList.add("active");
        }
    });
});

//открытие меню сбоку
const toggleMenu = document.querySelector(".navbar-aside-icon__input")
const overlay = document.querySelector(".overlay")
const menu = document.querySelector(".navbar");
const page = document.querySelector("body");

toggleMenu.addEventListener("change", () => {
    if (toggleMenu.checked) {
        overlay.style.display = "block";
        menu.classList.add("aside");
        page.style.overflow = "hidden";
    }
    else {
        overlay.style.display = "none";
        menu.classList.remove("aside");
        page.style.overflow = "auto";
    }
})

//маска для ввода номера телефона
document.addEventListener("DOMContentLoaded", () => {
    const eventCallBack = (e) => {
        const el = e.target;
        const clearValue = el.dataset.phoneClear;
        const pattern = el.dataset.phonePattern;
        const matrixDef = "+7(___) ___-__-__";
        const matrix = pattern ? pattern : matrixDef;
        let i = 0;
        const def = matrix.replace(/\D/g, "");
        let val = e.target.value.replace(/\D/g, "");

        if (clearValue !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }

        if (def.length >= val.length) val = def;

        e.target.value = matrix.replace(/./g, (a) => {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });
    };

    const phoneInputs = document.querySelectorAll('[data-phone-pattern]');
    for (const elem of phoneInputs) {
        ['input', 'blur', 'focus'].forEach(ev => {
            elem.addEventListener(ev, eventCallBack);
        });
    }
});