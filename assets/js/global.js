document.addEventListener("DOMContentLoaded",function(e){
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