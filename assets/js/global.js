document.addEventListener("DOMContentLoaded",function(e){
    const DATE_ELEMENT = document.getElementById("year");
    const DATE = new Date().getFullYear();
    DATE_ELEMENT.innerHTML = DATE;
})