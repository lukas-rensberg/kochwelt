let recipeOfTheDay;

document.addEventListener("DOMContentLoaded", function (e) {
    const DATE_ELEMENT = document.getElementById("year");
    const DATE = new Date().getFullYear();
    DATE_ELEMENT.innerHTML = DATE;
    
    // Add scroll listener to close mobile menu
    window.addEventListener('scroll', closeMobileMenuOnScroll);
})

function toggleMobileNavigation() {
    const mobileNav = document.getElementById("mobile-navigation");
    const burgerMenu = document.querySelector(".burger-menu");
    
    if (mobileNav) {
        mobileNav.classList.toggle("active");
        burgerMenu.classList.toggle("active");
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById("mobile-navigation");
    const burgerMenu = document.querySelector(".burger-menu");
    
    if (mobileNav && mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active");
        burgerMenu.classList.remove("active");
    }
}

function closeMobileMenuOnScroll() {
    closeMobileMenu();
}

function openRecipeOfTheDay() {
    recipeOfTheDay = getRandomRecipe();
    window.location.href = recipeOfTheDay;
}

function getRandomRecipe() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "/rezept-rensberg/";
    } else if (randomNumber < 0.66) {
        return "/rezept-kleppmann/";
    } else {
        return "/Rezept-Keil/";
    }
}