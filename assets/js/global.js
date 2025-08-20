let recipeOfTheDay;

document.addEventListener("DOMContentLoaded", function (e) {
    const DATE_ELEMENT = document.getElementById("year");
    const DATE = new Date().getFullYear();
    DATE_ELEMENT.innerHTML = DATE;
})

function toggleMobileNavigation() {
    const mobileNav = document.getElementById("mobile-navigation");
    const burgerMenu = document.querySelector(".burger-menu");
    
    if (mobileNav) {
        mobileNav.classList.toggle("active");
        burgerMenu.classList.toggle("active");
    }
}

function openRecipeOfTheDay() {
    recipeOfTheDay = getRandomRecipe();
    window.location.href = recipeOfTheDay;
}

function getRandomRecipe() {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
        return "/rezept-rensberg/";
    } else if (randomNumber > 0.5 && randomNumber < 0.8) {
        return "/Rezept-Keil/";
    } else {
        return "/rezept-kleppmann/";
    }
}