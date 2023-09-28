// script.js
document.addEventListener("DOMContentLoaded", function () {
    const url = window.location.href;
    const page = url.split("/").pop();

    if (page === "profile.html") {
        document.querySelector(".section#profile h1").textContent = "";
        document.querySelector(".section#profile p").textContent = "";
    } else if (page === "hometown.html") {
        document.querySelector(".section#hometown h2").textContent = "";
        document.querySelector(".section#hometown p").textContent = "";
    } else if (page === "food.html") {
        document.querySelector(".section#local-food h2").textContent = "";
        document.querySelector(".section#local-food p").textContent = "";
    } else if (page === "tourist.html") {
        document.querySelector(".section#tourist-place h2").textContent = "";
        document.querySelector(".section#tourist-place p").textContent = "";
    }

    var mainElement = document.querySelector("main");
    mainElement.classList.add("show");
});
