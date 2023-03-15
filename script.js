// Variables
// ================================================================================================
let slide = 0;
let mode = "mobile";
let isNavOpen = false;

let slides = [
    {
        img: `./images/${mode}-image-hero-1.jpg`,
        heading: "Discover innovative ways to decorate",
        sentence: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        img: `./images/${mode}-image-hero-2.jpg`,
        heading: "We are available all across the globe",
        sentence: "With stores all over the world, It's easy for you to find furniture for your home or place of business. Locally,  we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        img: `./images/${mode}-image-hero-3.jpg`,
        heading: "Manufactured with the best materials",
        sentence: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    },
]

// Event listeners
// ================================================================================================
window.onresize = () => {
    if (window.innerWidth < 1440) {
        mode = "mobile";
    } else {
        mode = "desktop";
    }

    changeSlide();
}

window.onload = () => {
    if (window.innerWidth < 1440) {
        mode = "mobile";
    } else {
        mode = "desktop";
    }

    changeSlide();
}

// Functions
// ================================================================================================
function reloadSlide() {
    slides = [
        {
            img: `./images/${mode}-image-hero-1.jpg`,
            heading: "Discover innovative ways to decorate",
            sentence: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        {
            img: `./images/${mode}-image-hero-2.jpg`,
            heading: "We are available all across the globe",
            sentence: "With stores all over the world, It's easy for you to find furniture for your home or place of business. Locally,  we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            img: `./images/${mode}-image-hero-3.jpg`,
            heading: "Manufactured with the best materials",
            sentence: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        },
    ]
}

function changeSlide() {
    reloadSlide();

    const imgElement = document.querySelector(".header__img");
    const headingElement = document.querySelector(".heading--primary");
    const sentenceElement = document.querySelector(".sentence");


    imgElement.src = slides[slide].img;
    headingElement.innerText = slides[slide].heading;
    sentenceElement.innerText = slides[slide].sentence;
};

function sliderSetup() {
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    prev.addEventListener("click", () => {
        slide === 0 ? slide = 2 : slide--;
        changeSlide();
    });

    next.addEventListener("click", () => {
        slide === 2 ? slide = 0 : slide++;
        changeSlide();
    });
}

function navSetup() {
    const burger = document.querySelector(".navigation__burger");

    // Set an event listener to the burger
    // --------------------------------------------------------------------------------------------
    burger.addEventListener("click", () => {
        isNavOpen = !isNavOpen;

        const icon = document.querySelector(".navigation__burger");
        const links = document.querySelector(".navigation__list");
        const logo = document.querySelector(".navigation__logo");
        const nav = document.querySelector(".navigation__box");
        const overlay = document.querySelector(".navigation__overlay");

        const navBg = isNavOpen ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)";
        const flexDir = isNavOpen ? "row-reverse" : "row";

        isNavOpen ? icon.src = "./images/icon-close.svg" : icon.src = "./images/icon-hamburger.svg";

        logo.classList.toggle("hide");
        overlay.classList.toggle("show");
        links.classList.toggle("show");

        nav.style.backgroundColor = navBg;
        nav.style.flexDirection = flexDir;
    });
}

function main() {
    navSetup();
    sliderSetup();
}

// Main method call
// ================================================================================================
main();